import React from 'react';
import { useNavigate } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import "./PageNotFound.css";

function PageNotFound() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };

  return (
    <div className="container-lost">
      <div className="container-text">
        <h1>"Oops!! Te perdiste ?.."</h1>
        <h3>No te precupes</h3>
        <h2>Volve a casa haciendo click abajo</h2>
      </div>

      <div className="home-lost">
        <AiOutlineHome className="icon-lost" onClick={handleClick} />
      </div>
    </div>
  );
}

export default PageNotFound;
