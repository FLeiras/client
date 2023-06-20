import React from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteActivity } from "../../redux/actions";
import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import "./ActivityCard.css";

const ActivityCard = ({ id, name, difficult, duration, season, countryId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = () => {
    dispatch(deleteActivity(id, countryId));
    navigate("/home");
    Swal.fire({
      title: "Actividad eliminada correctamente",
      icon: "success",
      confirmButtonText: "Aceptar",
    });
  };

  return (
    <div className="activity_container">
      <div className="activity_detail">
        <p>
          <b>Actividad : </b>
          {name}
        </p>
        <p>
          <b>Dificultad : </b>
          {difficult}
        </p>
        <p>
          <strong>Duration : </strong>
          {duration} Horas
        </p>
        <p>
          <strong>Temporada : </strong>
          {season}
        </p>
      </div>
      <div className="btnDel">
        <AiOutlineDelete onClick={handleDelete} />
      </div>
    </div>
  );
};

export default ActivityCard;
