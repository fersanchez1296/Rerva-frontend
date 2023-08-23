import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import world1 from "../../assets/animations/index/world/world1.json";
import { UdgLogo } from "../../components/uddLogo/UdgLogo";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { Reveal } from "../../components/reveal/Reveal";
import slide from "../../assets/animations/slide/slide.json";
import { Antecedentes } from "../../pages/index/antecedentes/Antecedentes";
import { Antecedentes2 } from "../../pages/index/antecedentes/Antecedentes2";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
const pages = [
  { name: "Busqueda por tarjetas", route: "/search" },
  { name: "Busqueda Gráfica", route: "/graphic-search" },
  { name: "Nuevo Documento", route: "/new-document" },
];
const slider = (
  <AwesomeSlider animation="cubeAnimation" bullets={false} className="aws-btn">
    <div>
      <Antecedentes/>
    </div>
    <div>
      <Antecedentes2 />
    </div>
  </AwesomeSlider>
);
export const Index = (props: Props) => {
  const navigate = useNavigate();
  const handleNavigation = (route: string) => {
    navigate(route);
  };
  return (
    <>
      <Drawer variant="permanent">
        <List>
          {pages.map((page, index) => (
            <Button
              className="index-menu-item"
              key={page.name}
              sx={{ my: 2, display: "flex" }}
              onClick={() => handleNavigation(page.route)}
            >
              {page.name}
            </Button>
          ))}
        </List>
      </Drawer>
      <div className="container">
        <Reveal nameClass="animation">
          <Lottie animationData={world1} className="animation developing" />
        </Reveal>
        <Reveal nameClass="logo">
          <UdgLogo />
        </Reveal>
        <Reveal nameClass="titulo">
          Repositorio de estudios sobre la región valles
        </Reveal>
        <Reveal nameClass="info">
          <p>
            <i>
              "El filtro de la información es tan importante como su acceso;
              solo así podemos separar el conocimiento de la desinformación."
            </i>
          </p>
        </Reveal>
        <Reveal nameClass="slide">
          <Lottie animationData={slide} className="slide-anim" />
        </Reveal>
      </div>

      <div className="slider-container">{slider}</div>
    </>
  );
};
