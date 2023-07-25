import { SearchBar } from "../searchBar/Search";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import React from "react";
import AppBar from "../../utilities/appBar.utilities";
import {  useNavigate } from "react-router-dom";

const actions = [
  { icon: <HomeIcon />, name: "Inicio", route: "/" },
  { icon: <TravelExploreIcon />, name: "Busqueda Gráfica", route: "/graphic-search" },
  { icon: <NoteAddIcon />, name: "Nuevo Documento", route: "/new-document" },
];

type isShowCardType = (text: string, show: boolean) => void;

export const AppBarMobile = ({ showCards }: { showCards: isShowCardType }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  const searchParam = (search: string) => {
    showCards(search, true);
  };

  const handleNavigation = (route: string) => {
    handleClose();
    navigate(route);
  };

  return (
    <AppBar
      position="fixed"
      color="primary"
      sx={{ top: "auto", bottom: 0, display: { sm: "none" } }}
    >
      <Toolbar>
        <SpeedDial
          ariaLabel="SpeedDial controlled open example"
          sx={{ position: "absolute", bottom: 10, left: 5 }}
          icon={<MenuIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={() => handleNavigation(action.route)}
            />
          ))}
        </SpeedDial>
        <Box sx={{ flexGrow: 1, right: "100px" }} />
        <IconButton color="inherit">
          <SearchBar searchfunction={searchParam} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
