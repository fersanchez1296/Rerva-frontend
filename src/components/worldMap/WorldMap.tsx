import { useRef, useEffect, useState } from "react";
import { select, geoPath, geoMercator, zoom } from "d3";
import useResizeObserver from "../useResizeObserver/useResizeObserver";
import { FloatingCard } from "../floatingCard/FloatingCard";

interface Props {
  data: any;
  handleChange: any;
  countriesData: any;
}

import axios from "axios";
export const WorldMap = ({ data, handleChange, countriesData }: Props) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const dimensions = useResizeObserver(wrapperRef);
  const [openFloatingCard, setOpenFloatingCard] = useState(false);
  const [dataForEachCountry, setDataForEachCountry] = useState([]);
  const minScaleToShowLabels = 0; // Ajusta este valor según tus necesidades
  const minAreaToShowLabel = 10; // Ajusta este valor según tus necesidades

  const getData = async (country: string) => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/countriesData",
        {
          params: {
            search: country,
          },
        }
      );
      setDataForEachCountry(response.data);
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    // use resized dimensions
    // but fall back to getBoundingClientRect if no dimensions yet.
    const { width, height } = dimensions ?? {
      width: wrapperRef.current?.getBoundingClientRect().width || 0,
      height: wrapperRef.current?.getBoundingClientRect().height || 0,
    };

    const svg = select<SVGSVGElement, unknown>(svgRef.current!);
    svg.attr("viewBox", [0, 0, width, height]);

    // projects geo-coordinates on a 2D plane
    const projection = geoMercator()
      .fitSize([width, height], data)
      .precision(100);

    // takes geojson data,
    // transforms that into the d attribute of a path element
    const pathGenerator = geoPath().projection(projection);

    const g = svg.select(".zoomable-group");

    // render each country
    const countries = g
      .selectAll(".country")
      .data(data.features)
      .join("path")
      .on("click", (event, feature: any) => {
        console.log(event);

        setOpenFloatingCard(true);
        getData(feature.properties.name_es);
      })
      .on("mouseover", (event, name: any) => {
        console.log(event);

        const { name_es } = name.properties;
        const { NAME } = name.properties;
        handleChange(NAME, name_es);
      });

    countries
      .attr("class", "country")
      .attr("fill", (d: any) => {
        const country = countriesData.find(
          (country: any) => country.name_es === d.properties.name_es
        );
        return country ? "#da256aeb" : "#bdbdbdbb";
      })
      .attr("d", (feature: any) => pathGenerator(feature));

    // Muestra u oculta los nombres de los países o estados según el nivel de zoom
    const countryLabels = g
      .selectAll(".country-label")
      .data(
        data.features.filter(
          (d: any) => pathGenerator.area(d) >= minAreaToShowLabel
        )
      ) // Filtra solo países o estados con un área mínima
      .join("text")
      .attr("class", "country-label")
      .text((d: any) =>
        d.properties.NAME ? d.properties.NAME : d.properties.name_es
      )
      .attr("x", (d: any) => pathGenerator.centroid(d)[0])
      .attr("y", (d: any) => pathGenerator.centroid(d)[1])
      .attr("stroke", "#fff")
      .attr("pointer-events", "none")
      .attr("text-anchor", "middle")
      .attr("dy", -0.5) // Desplazamiento vertical ajustado para evitar superposición
      .attr("dx", 1.5)
      .attr("font-size", 1) // Ajusta el tamaño de fuente según tus necesidades
      .attr("opacity", () => (shouldShowLabels(1) ? 1 : 0)); // Inicialmente, establece la opacidad en 0 para ocultar los nombres

    // Agrega la función para determinar si el nivel de zoom es suficiente para mostrar las etiquetas
    function shouldShowLabels(scale: any) {
      return scale >= minScaleToShowLabels;
    }

    const zoomBehavior = zoom<SVGSVGElement, unknown>()
      .extent([
        [0, 0],
        [width, height],
      ])
      .scaleExtent([1.5, 25])
      .translateExtent([
        [0, 0],
        [width, height],
      ])
      .on("zoom", (event) => {
        const { x, y, k } = event.transform;

        // Aplica las restricciones para el zoom
        const maxScale = 25; // Máximo nivel de zoom permitido
        const minScale = 1.5; // Mínimo nivel de zoom permitido
        const constrainedK = Math.min(Math.max(k, minScale), maxScale);

        // Obtiene las dimensiones ajustadas por el nivel de zoom actual
        const adjustedWidth = width * constrainedK;
        const adjustedHeight = height * constrainedK;

        // Calcula las restricciones para la traslación (pan) para que el mapa no salga del contenedor
        const x0 = Math.min(0, width - adjustedWidth);
        const y0 = Math.min(0, height - adjustedHeight);
        const constrainedX = Math.min(Math.max(x, x0), 0);
        const constrainedY = Math.min(Math.max(y, y0), 0);

        // Aplica la transformación ajustada al grupo de elementos del mapa (g)
        g.attr(
          "transform",
          `translate(${constrainedX},${constrainedY}) scale(${constrainedK})`
        );

        // Muestra u oculta los nombres de los países o estados según el nivel de zoom
        const showLabels = shouldShowLabels(constrainedK);
        countryLabels.attr("opacity", showLabels ? 1 : 0);
      });

    svg.call(zoomBehavior);
  }, [data, dimensions]);

  const handleOpenFloatingCard = () => {
    setOpenFloatingCard(false);
  };

  return (
    <>
      <div ref={wrapperRef} className="wrapper-map">
        <svg ref={svgRef} className="map">
          <g className="zoomable-group"></g>
        </svg>
      </div>
      {openFloatingCard ? (
        <FloatingCard
          handleOpenFloatingCard={handleOpenFloatingCard}
          dataC={dataForEachCountry}
        ></FloatingCard>
      ) : null}
    </>
  );
};
