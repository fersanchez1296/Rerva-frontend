import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { useNavigate } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Lottie from "lottie-react";
import world1 from "../../assets/animations/index/world/world1.json";
import know1 from "../../assets/animations/knwoledge/know1.json";
import know2 from "../../assets/animations/knwoledge/know2.json";
import know3 from "../../assets/animations/knwoledge/know3.json";
import know4 from "../../assets/animations/knwoledge/know4.json";
import know5 from "../../assets/animations/knwoledge/know5.json";
import know6 from "../../assets/animations/knwoledge/know6.json";
import know7 from "../../assets/animations/knwoledge/know7.json";
import know8 from "../../assets/animations/knwoledge/know8.json";
import campus from "../../assets/animations/knwoledge/campus.json";
import region from "../../assets/animations/knwoledge/region.json";
import { UdgLogo } from "../../components/uddLogo/UdgLogo";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { Reveal } from "../../components/reveal/Reveal";
import slide from "../../assets/animations/slide/slide.json";
import Divider from "@mui/material/Divider";
import { Antecedentes } from "../../pages/index/antecedentes/Antecedentes";
import { Antecedentes2 } from "../../pages/index/antecedentes/Antecedentes2";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import AwesomeSlider from "react-awesome-slider";
import { Objetivo } from "./objetivo/Objetivo";
import { Objetivo2 } from "./objetivo/Objetivo2";
import { ObjetivoP1 } from "./objetivoParticular/ObjetivoParticular";
import { ObjetivoP2 } from "./objetivoParticular/ObjetivoParticular2";
import { Justificacion } from "./justificacion/Justificacion";
import { Justificacion2 } from "./justificacion/Justificacion2";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "react-awesome-slider/dist/custom-animations/fall-animation.css";
import "react-awesome-slider/dist/custom-animations/open-animation.css";
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export const Index = (props: Props) => {
  const navigate = useNavigate();
  const handleNavigation = (route: string) => {
    navigate(route);
  };
  const drawerWidth = 50;
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const pages = [
    { name: "Busqueda por tarjetas", route: "/search" },
    { name: "Busqueda Gráfica", route: "/graphic-search" },
    { name: "Nuevo Documento", route: "/new-document" },
  ];
  const slider = (
    <AwesomeSlider
      animation="cubeAnimation"
      bullets={false}
      className="aws-btn"
    >
      <>
        <Antecedentes
          text={`La creación y difusión del conocimiento son actividades
            fundamentales en las rutas de desarrollo de las regiones, más en un
            contexto de globalización y de creciente importancia de la ciencia y
            la tecnología para enfrentar problemas sociales, económicos y
            ambientales.`}
          anim={know2}
        />
      </>
      <>
        <Antecedentes2
          text={`Innovación y desarrollo científico se han convertido en factores
            explicativos para entender la diferenciación entre las rutas de
            desarrollo regional, la formación de polos de innovación, la
            concentración de clases creativas en distintos lugares, y en última
            instancia, para explicar la diferenciación en las rutas de
            desarrollo que siguen los países.`}
          anim={know1}
        />
      </>
      <>
        <Antecedentes
          text={`En el centro de la discusión sobre lo que se sabe de una región y lo que se genera de conocimientos en cada región, está el tema del vínculo existente entre ciencia y desarrollo, lo cual plantea interrogantes sobre el vínculo existente  y sobre las formas convencionales de generar investigación y desarrollo.`}
          anim={know3}
        />
      </>
      <>
        <Antecedentes2
          text={`Entender la región como objeto
        de estudio y la región como 
        espacio de producción
        y de condiciones para el 
        desarrollo científico y 
        tecnológico son tareas 
        importantes para
        trazar rutas de colaboración 
        entre productores y 
        demandantes de 
        conocimientos en los
        distintos temas de conocimiento científico, para explorar rutas independientes 
        de desarrollo científico o de manera más específica.`}
          anim={know4}
        />
      </>
      <>
        <Antecedentes
          text={`Sería hasta el año 2000 cuando el Consejo General Universitario de la U. de G., 
        aprobaría la creación del Campus Universitario de los Valles, planteándole 
        como objetivo el “ofrecer programas educativos acordes a las necesidades 
        regionales y contribuir en el desarrollo económico y productivo
        de sus municipios de influencia”.`}
          anim={campus}
        />
      </>
      <>
        <Antecedentes2
          text={`Esta área de influencia abarca las siguientes regiones y municipios de Jalisco:
        i) Ahualulco de Mercado, Amatitán, Ameca, El Arenal, Etzatlán,Hostotipaquillo,
        Magdalena, San Juanito de Escobedo, San Marcos, Tala, Tequila y Teuchitlán, 
        pertenecientes a la Región de los Valles; `}
          anim={region}
        />
      </>
      <>
        <Antecedentes
          text={`ii) Cocula y San Martín de Hidalgo
        correspondientes a la Región Lagunas;
         iii) Atenguillo, Guachinango, Mascota, 
        Mixtlán y Talpa de Allende, los cuales 
        conforman una parte de la Región 
        Costa-Sierra Occidental.`}
          anim={know6}
        />
      </>
      <>
        <Antecedentes2
          text={`La producción académica encontrada hasta el día de hoy en esta búsqueda 
        preliminar muestra la existencia de 412 trabajos de distintos tipos, que van 
        desde artículos, libros, capítulos de libro, conferencias y tesis de licenciatura 
        y posgrados, desarrollados por 984 autores, algunos escritos de manera 
        individual y muchos otros en coautoría.  `}
          anim={know5}
        />
      </>
      <>
        <Antecedentes
          text={`Los resultados de esta búsqueda 
        también muestran una 
        diversidad de áreas, 
        campos y temáticas desde las 
        cuales se ha generado 
        investigación y 
        conocimiento sobre cada uno 
        de los municipios que 
        constituyen dicha 
        región de influencia. 
        De manera general, se 
        puede aventurar que en su 
        mayoría han sido desarrolladas desde las ciencias sociales, las ciencias 
        agropecuarias y biotecnologías, la biología y la química.`}
          anim={know7}
        />
      </>
      <>
        <Antecedentes2
          text={`Asimismo, se observa la ausencia de un espacio que integre y permita
        la consulta sistematizada de los contenidos académicos especializados sobre 
        la región de análisis, a fin de que, por un lado, los profesores - investigadores y 
        la comunidad estudiantil tengan la posibilidad de abordar las futuras 
        investigaciones desde perspectivas innovadoras, cubriendo así los vacíos 
        existentes.  `}
          anim={know8}
        />
      </>
    </AwesomeSlider>
  );

  const objective = (
    <AwesomeSlider
      animation="fallAnimation"
      bullets={false}
      className="aws-btn"
    >
      <>
        <Objetivo
          text={`1) Determinar el estado actual y la trayectoria que ha seguido la 
          hechura de la investigación sobre la región y los municipios de influencia del CUValles de la U. de G., a partir de la producción científica orientada a la 
          descripción, explicación y análisis de
          las diversas temáticas y problemáticas abordadas desde la comunidad 
          académica nacional e internacional en los últimos 50 años. `}
          anim={know2}
        />
      </>
      <>
        <Objetivo2
          text={`2)Explorar las brechas entre el conocimiento existente y las demandas sociales de la región.`}
          anim={know1}
        />
      </>
    </AwesomeSlider>
  );

  const objectiveP = (
    <AwesomeSlider
      animation="openAnimation"
      bullets={false}
      className="aws-btn"
    >
      <>
        <ObjetivoP1
          text={`1. Identificar las temáticas que se han 
          definido como prioritarias en la 
          producción académica de la región a 
          lo largo del tiempo. `}
          anim={know2}
        />
      </>
      <>
        <ObjetivoP2
          text={`2. Develar las brechas y potenciales líneas
          de investigación en distintas disciplinas 
          y campos de conocimiento, acordes a las 
          dinámicas y procesos  regionales.`}
          anim={know1}
        />
      </>
      <>
        <ObjetivoP1
          text={`3. Mostrar la incidencia del CUValles en la
          generación de conocimiento científico 
          en su región de influencia.`}
          anim={know2}
        />
      </>
      <>
        <ObjetivoP2
          text={`4. Impulsar la creación del Repositorio de
          Estudios sobre la Región.`}
          anim={know1}
        />
      </>
    </AwesomeSlider>
  );

  const justify = (
    <AwesomeSlider
      animation="cubeAnimation"
      bullets={false}
      className="aws-btn"
    >
      <>
        <Justificacion
          text={`El presente proyecto de investigación cimienta su justificación en la falta de 
          identificación, hasta el día de hoy, de un algún esfuerzo académico enfocado 
          a la creación de un estado del arte sobre los municipios que conforman el 
          área de influencia del CUValles. La diferencia y una de las grandes aportaciones de 
          este proyecto radica en el abordaje holístico de los trabajos académicos realizados en la 
          región de estudio, en sus diferentes escalas, propuestas teórico-metodológicas y vertientes analíticas.`}
          anim={know2}
        />
      </>
      <>
        <Justificacion2
          text={`Además, este proyecto también justifica su hechura en dos aspectos clave: `}
          anim={know1}
        />
      </>
      <>
        <Justificacion
          text={`
          1) al identificar la trayectoria del conocimiento existente y generar una
          balanza contrastando los requerimientos y demandas sociales, donde 
          además será posible visibilizar las brechas existentes en el conocimiento 
          sobre los procesos y fenómenos que ocurren en la región. `}
          anim={know2}
        />
      </>
      <>
        <Justificacion2
          text={`2) Asimismo, esto permitirá develar los vacíos y mostrar ventanas de
          oportunidad para la propuesta de nuevas líneas de investigación.`}
          anim={know1}
        />
      </>
    </AwesomeSlider>
  );
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            fontSize: { md: "3rem" },
          }}
        >
          <Grid container spacing={2} className="slider-container">
            <Grid xs={6} md={1}>
              <Reveal nameClass="logoU">
                <UdgLogo />
              </Reveal>
            </Grid>
            <Grid xs={6} md={11}>
              <Reveal nameClass="title">
                Repositorio de estudios sobre la región valles
              </Reveal>
            </Grid>
            <Grid xs={12}>
              <Divider />
            </Grid>
            <Grid xs={12} md={6}>
              <Reveal nameClass="description">
                <p>
                  <i>
                    "El filtro de la información es tan importante como su
                    acceso; solo así podemos separar el conocimiento de la
                    desinformación."
                  </i>
                </p>
              </Reveal>
            </Grid>
            <Grid xs={12} md={6}>
              <Reveal nameClass="anim">
                <Lottie animationData={world1} />
              </Reveal>
            </Grid>
            <Toolbar />
          </Grid>
          <>
            <h3>ANTECEDENTES</h3>
          </>

          <div className="slide">{slider}</div>
          <>
            <h3>OBJETIVO</h3>
          </>

          <div className="slide">{objective}</div>

          <>
            <h3>OBJETIVOS PARTICULARES</h3>
          </>

          <div className="slide">{objectiveP}</div>

          <>
            <h3>JUSTIFICACIÓN</h3>
          </>

          <div className="slide">{justify}</div>
        </Box>
      </Box>
    </>
  );
};
