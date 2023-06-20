import React from 'react';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchCountries } from "../../redux/actions";
import { AiOutlineSearch } from "react-icons/ai";
import "./SearchBar.css";

function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const handleButton = (e) => {
    e.preventDefault();
    setName("");
    dispatch(searchCountries(name));
  };

  return (
    <div className="search_container">
      <input
        type="text"
        value={name}
        placeholder={`${"  "}Busca tu Pais acá...`}
        onChange={(e) => handleInput(e)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleButton(e);
        }}
      />
      <AiOutlineSearch className="input-search" onClick={handleButton} />
    </div>
  );
}

export default SearchBar;
