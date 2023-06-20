import React from 'react';
import gif from "../../props/giphy.gif";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="notFound">
      <h1>"Oops!! No hay resultados..."</h1>
      <h3>Recarga tu pagina</h3>
      <div className="gif">
        <img src={gif} alt="gif" />
      </div>
    </div>
  );
}

export default NotFound;
