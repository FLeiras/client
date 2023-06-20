import React from 'react';
import { Link } from "react-router-dom";
import "./Card.css";

function Card({ img, name, continent, population, id, subregion }) {
  return (
    <div className="containerCard">
      <div className="cardImg">
        <img href="#" src={img} alt="Img not found" />
      </div>
      <div className="dates_cards">
        <h1>{name}</h1>
        <h3>{continent}</h3>
        <h3>{subregion}</h3>
        <h3>{population}</h3>
        <div className="detail-link">
          <Link to={`/home/${id}`} className="btnDetail">
            -Mas-
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
