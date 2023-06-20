import React from 'react';
import Imagen from "../../props/PERN.png";
import JS from "../../props/js.png";
import RE from "../../props/react.png";
import RED from "../../props/redux.png";
import NOD from "../../props/node.png";
import EX from "../../props/express.png";
import POS from "../../props/pos.png";
import CSS from "../../props/css.png";
import HTML from "../../props/html.png";
import { Link } from "react-router-dom";
import { BsBoxArrowLeft } from "react-icons/bs";
import "./About.css";

export default function About() {
  return (
    <>
    <div className="icon-about">
    <Link to="/home">
      <BsBoxArrowLeft class="icon-goHome" />
    </Link>
  </div>
    <div className="container-about">
      <div className="datos-text">
        <h1 className="title-about">Sobre Mi</h1>
        <div className="about-datos">
          <span>
            Como estas?, gracias por visitar mi App. Soy un buscador de
            soluciones optimizadas. Apasionado y ansioso por pertenecer a un
            grupo de trabajo Web Profesional. Muy buena comunicación, aptitud
            para el trabajo en grupo y en equipo, amplia experiencia en atención
            al cliente, ambicioso, resiliente y motivado.
          </span>
        </div>
      </div>
      <div className="container-skills">
        <div className="js">
          {<img src={JS} alt="JS" />}
          <p>JS</p>
        </div>
        <div className="re">
          {<img src={RE} alt="RE" />}
          <p>React.js</p>
        </div>
        <div className="red">
          {<img src={RED} alt="RED" />}
          <p>Redux</p>
        </div>
        <div className="red">
          {<img src={NOD} alt="NOD" />}
          <p>Node.js</p>
        </div>
        <div className="ex">
          {<img src={EX} alt="EX" />}
          <p>Express</p>
        </div>
        <div className="red">
          {<img src={POS} alt="POS" />}
          <p>PostgreSQL</p>
        </div>
        <div className="red">
          {<img src={CSS} alt="CSS" />}
          <p>CSS</p>
        </div>
        <div className="red">
          {<img src={HTML} alt="HTML" />}
          <p>HTML</p>
        </div>
      </div>
      <div className="about_image">
        <img src={Imagen} alt="Nada" />
      </div>
    </div>
    </>
  );
}
