import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme } from "@mui/material/styles";
import { AppBarMobile } from "../appBarMobile/AppBarMobile";
import { AppBarDesktop } from "../appBarDesktop/AppBarDesktop";
import { Content } from "../contentShower/Content";

export const Header = () => {
  const [searchText, setSearchText] = React.useState("");
  const [showCard, setShowCard] = React.useState(false);

  React.useEffect(() => {
    setSearchText("")
  },[])

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#1976d2",
      },
    },
  });

  const isShowCards = (text: string, show: boolean) => {
    setSearchText(text);
    setShowCard(show);
  };
  return (
    <Box sx={{ display: "flex", flexGrow: 1 }}>
      <CssBaseline />
      <ThemeProvider theme={darkTheme}>
        {/* -------------------------------------------------------------------------- */
        /*                         Barra de navegación moviles                        */
        /* -------------------------------------------------------------------------- */}
        <AppBarMobile showCards={isShowCards} />
        {/* -------------------------------------------------------------------------- */
        /*                      Barra de navegacion para desktop                      */
        /* -------------------------------------------------------------------------- */}
        <AppBarDesktop showCards={isShowCards} />
        {/* -------------------------------------------------------------------------- */
        /*                         Visualizacion del contenido                        */
        /* -------------------------------------------------------------------------- */}
        <Content searchText={searchText} showCard={showCard} />
      </ThemeProvider>
    </Box>
  );
};
