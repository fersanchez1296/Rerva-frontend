import {Tooltip } from "@mui/material";
import { useState, ChangeEvent } from "react";

type SearchFunctionType = (searchText: string) => void;

export const SearchBar = ({
  searchfunction,
}: {
  searchfunction: SearchFunctionType;
}) => {
  const [searchText, setSearchText] = useState(" ");
  const infopadre = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    searchfunction(searchText);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  return (
    <>
      <form className="search-input">
        <Tooltip title="Busqueda sensible a acentos" arrow>
          <input type="text" placeholder="Buscar..." onChange={handleChange} />
        </Tooltip>
        <button type="submit" onClick={infopadre}>
          <i className="material-icons">search</i>
        </button>
      </form>
    </>
  );
};
