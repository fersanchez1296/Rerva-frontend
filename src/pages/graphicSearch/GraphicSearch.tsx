import * as React from "react";
import { useGetCountriesQuery } from "../../api";
import { Spiner } from "../../components/spiner/Spiner";
import { SnackBar } from "../../components/snackBar/SnackBar";
import { WorldMap } from "../../components/worldMap/WorldMap";
import data from "../../assets/maps/world.geo.json";
import { ServerError } from "../../components/serverError/ServerError";
import StyleIcon from "@mui/icons-material/Style";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { useNavigate } from "react-router-dom";

export const GraphicSearch = () => {
  const [countryName, setCountryName] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  const {
    data: countries,
    isError,
    isLoading,
    error,
  } = useGetCountriesQuery({});

  if (isLoading) {
    return (
      <>
        <Spiner showSpiner />
      </>
    );
  }
  if (isError)
    return (
      <>
        <SnackBar
          msg={
            "Ocurrió un error en la petición, error : " + JSON.stringify(error)
          }
          variant={"error"}
        />
        <ServerError />
      </>
    );

  const handleChange = (country: string) => {
    setCountryName(country);
  };

  const handleNavigation = (route: string) => {
    handleClose();
    navigate(route);
  };

  const actions = [
    { icon: <HomeIcon />, name: "Inicio", route: "/" },
    { icon: <StyleIcon />, name: "Busqueda por tarjeta", route: "/search" },
    { icon: <NoteAddIcon />, name: "Nuevo Documento", route: "/new-document" },
  ];

  return (
    <div className="wrapper">
      <WorldMap
        data={data}
        handleChange={handleChange}
        countriesData={countries}
      />

      <div className="title-container">
        <div className="title">
          <h4>{countryName}</h4>
        </div>
      </div>

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
    </div>
  );
};
