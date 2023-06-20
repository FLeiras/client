import React from 'react';
import { Fragment } from "react";
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import "./Paginado.css";

export default function Paginado({
  countriesPerPage,
  allCountries,
  paginado,
  thisPage,
  input,
  setInput,
  pages,
}) {
  const currentPage = [];

  for (let i = 0; i < Math.ceil(allCountries / countriesPerPage); i++) {
    currentPage.push(i + 1);
  }

  const nextPage = () => {
    setInput(parseInt(input) + 1);
    paginado(parseInt(thisPage) + 1);
  };

  const previousPage = () => {
    setInput(parseInt(input) - 1);
    paginado(parseInt(thisPage) - 1);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      if (
        parseInt(e.target.value < 1) ||
        parseInt(e.target.value) > Math.ceil(currentPage) ||
        isNaN(parseInt(e.target.value))
      ) {
        paginado(1);
        setInput(1);
      } else {
        paginado(parseInt(e.target.value));
        setInput(parseInt(e.target.value));
      }
    }
  };

  const onChange = (e) => {
    setInput(e.target.value);
  };

  window.scrollTo(0, 0);

  return (
    <Fragment>
      <div className="pagdiv">
        <button
          className="pagprevbutton"
          disabled={thisPage === 1 || thisPage < 1}
          onClick={previousPage}
        >
          <IoMdArrowDropleftCircle />
        </button>
        <input
          className="paginput"
          type="text"
          onChange={(e) => onChange(e)}
          onKeyDown={(e) => onKeyDown(e)}
          name="page"
          autoComplete="off"
          value={input}
        />
        <p className="pagp"> de - {currentPage.length} - </p>
        <button
          className="pagnextbutton"
          disabled={
            thisPage === Math.ceil(pages) || thisPage > Math.ceil(pages)
          }
          onClick={nextPage}
        >
          <IoMdArrowDroprightCircle />
        </button>
      </div>
    </Fragment>
  );
}
