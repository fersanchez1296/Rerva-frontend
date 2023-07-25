import * as React from "react";
import { useGetCountriesQuery } from "../../api";
import { Spiner } from "../../components/spiner/Spiner";
import { SnackBar } from "../../components/snackBar/SnackBar";
import {WorldMap} from '../../components/worldMap/WorldMap'
import data from "../../assets/maps/world.geo.json";
import { ServerError } from "../../components/serverError/ServerError";

export const GraphicSearch = () => {
  const [countryName, setCountryName] = React.useState("");
  const [stateName, setStateName] = React.useState("");
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
          msg={"Ocurrió un error en la petición, error : " + JSON.stringify(error)}
          variant={"error"}
        />
        <ServerError/>
      </>
    );

  const handleChange = (country: string, state: string) => {
    setCountryName(country);
    setStateName(state);
  };

  return (
    <div className="wrapper">
      <WorldMap
        data={data}
        handleChange={handleChange}
        countriesData={countries}
      />

      <div className="title-container">
        <div className="title">
          <h5>{stateName}</h5>
          <hr />
          <h4>{countryName}</h4>
        </div>
      </div>
    </div>
  );
};
