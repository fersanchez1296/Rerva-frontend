import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Card } from "../cards/Card";
import DrawerHeader from "../../utilities/drawerHeader.utilities";

interface props {
    searchText : string
    showCard : boolean
}

export const Content = ({searchText,showCard} : props) => {
  const [dataLength, setDataLength] = React.useState(0);

  const getDataLength = (length: number) => {
    setDataLength(length);
  };
  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, p: 3, flexDirection: "column", textAlign: "left" }}
    >
      <DrawerHeader />
      <Typography
        variant="h4"
        component="div"
        sx={{
          flexGrow: 1,
          display: { xs: "block", sm: "block", color: "#000" },
        }}
      >
        {searchText !== "" ? (
          <>
            <strong>{dataLength} </strong>
            {dataLength === 1 ? "Coincidencia" : "Coincidencias"} con tu
            búsqueda: <strong>{searchText}</strong>
          </>
        ) : null}
      </Typography>
      {showCard && <Card getLength={getDataLength}>{searchText}</Card>}
    </Box>
  );
};
