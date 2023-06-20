import React from 'react';
import { Link } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  return (
    <>
      <div className="container landing_container">
        <div className="landing_text">
          <h3>Ingresa para llegar a cualquier país del mundo</h3>
          <h3>conoce su población, sus actividades turísticas,</h3>
          <h3>y todo de la mano de</h3>
          <h1>Country-App</h1>
          <div className="containerBtn button-container">
            <Link to="/home" className="btn pri">
              Vamos!!
            </Link>
          </div>
        </div>
      </div>
      <div className="footer">
        Desarrollada por Federico Leiras || 11-66067670 || fleiras18@gmail.com
      </div>
    </>
  );
}

export default LandingPage;
