import React from 'react';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, postActivity } from "../../redux/actions";
import { BsBoxArrowLeft } from "react-icons/bs";
import Swal from "sweetalert2";
import "./Form.css";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const country = useSelector((state) => state.countries);
  const allActivities = useSelector((state) => state.activity);
  const [error, setError] = useState({});
  const [input, setInput] = useState({
    name: "",
    difficult: "",
    duration: "",
    season: "",
    country: [],
  });

  useEffect(() => {
    dispatch(getCountries(""));
  }, [dispatch]);

  function handleOnChange(e) {
    setInput((state) => {
      const newState = {
        ...state,
        [e.target.name]: e.target.value,
      };
      setError(validate(newState));
      return newState;
    });
  }

  function handleSelect(e) {
    if (!input.country.includes(e.target.value)) {
      setInput({
        ...input,
        country: [...input.country, e.target.value],
      });
      setError(
        validate({ ...input, country: [...input.country, e.target.value] })
      );
    } else {
      Swal.fire({
        title: "Este pais ya fue seleccionado",
        icon: "warning",
        confirmButtonText: "Aceptar",
      });
    }
  }

  function handleSubmit(e) {
    if (allActivities.includes(input.name)) {
      e.preventDefault();
      alert(`${input.name} ya se encuentra en la lista de Actividades`);
    } else if (
      input.name.length < 3 ||
      !input.name.match(/^[A-Za-z]+$/) ||
      !input.difficult ||
      !input.duration ||
      !input.season ||
      input.country.length === 0
    ) {
      e.preventDefault();
      Swal.fire({
        title: "Debe completar todos los campos",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    } else {
      e.preventDefault();
      dispatch(postActivity(input));
      Swal.fire({
        title: "Actividad creada correctamente",
        icon: "success",
        confirmButtonText: "Aceptar",
      }).then((resultado) => {
        if (resultado.value) {
          window.location.reload();
        }
      });
      setInput({
        name: "",
        difficult: "",
        duration: "",
        season: "",
        country: [],
      });
      navigate("/home");
    }
  }

  function handleDelete(e) {
    setInput({
      ...input,
      country: input.country.filter((c) => c !== e),
    });
  }

  function validate(input) {
    let error = {};
    if (input.name.length < 3) {
      error.name = "Ingrese un nombre valido";
    }
    if (!input.name.match(/^[A-Za-z]+$/)) {
      error.name = "El nombre debe contener solo letras";
    }
    if (!input.duration) {
      error.duration = "La duracion debe especificarse en Horas";
    }
    if (!input.season) {
      error.season = "Season es un campo obligatorio";
    }
    if (!input.difficult) {
      error.difficult = "Difficult es un campo obligatorio";
    }
    return error;
  }

  let ordered = country.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });

  return (
    <div className="form_container">
      <div className="blur" />
      <div className="form-containertwo">
        <div className="form_home">
          <Link to="/home">
            <BsBoxArrowLeft className="icon-form" />
          </Link>
        </div>
        <div className="form_title">
          <h1>Create Activity</h1>
        </div>
        <form onSubmit={(e) => handleSubmit(e)} className="forms">
          <>
            <div className="form_name">
              <label>Nombre de la Actividad</label>
              <input
                placeholder="Actividad"
                type="text"
                value={input.name}
                name="name"
                autoComplete="off"
                onChange={handleOnChange}
              />
              <div className="name_error">
                {error.name && <p>{error.name}</p>}
              </div>
            </div>
            <label className="dif">Dificultad</label>
            <div className="form_difficult">
              <label>
                <input
                  type="radio"
                  value="1"
                  name="difficult"
                  onChange={handleOnChange}
                />
                1
              </label>
              <label>
                <input
                  type="radio"
                  value="2"
                  name="difficult"
                  onChange={handleOnChange}
                />
                2
              </label>
              <label>
                <input
                  type="radio"
                  value="3"
                  name="difficult"
                  onChange={handleOnChange}
                />
                3
              </label>
              <label>
                <input
                  type="radio"
                  value="4"
                  name="difficult"
                  onChange={handleOnChange}
                />
                4
              </label>
              <label>
                <input
                  type="radio"
                  value="5"
                  name="difficult"
                  onChange={handleOnChange}
                />
                5
              </label>
            </div>
            <div className="difficult_error">
              {error.difficult && <p>{error.difficult}</p>}
            </div>
            <div className="form_duration">
              <label>Duracion</label>
              <input
                placeholder="Tiempo en horas..."
                type="number"
                value={input.duration}
                name="duration"
                autoComplete="off"
                min="0"
                onChange={handleOnChange}
              />
            </div>
            <div className="duration_error">
              {error.duration && <p>{error.duration}</p>}
            </div>
            <label className="temp">Temporada</label>
            <div className="form_season">
              <label>
                <input
                  type="radio"
                  value="Todo el año"
                  name="season"
                  onChange={handleOnChange}
                />
                <p>Todo el año</p>
              </label>
              <label>
                <input
                  type="radio"
                  value="Verano"
                  name="season"
                  onChange={handleOnChange}
                />
                <p>Verano</p>
              </label>
              <label>
                <input
                  type="radio"
                  value="Primavera"
                  name="season"
                  onChange={handleOnChange}
                />
                <p>Primavera</p>
              </label>
              <label>
                <input
                  type="radio"
                  value="Otoño"
                  name="season"
                  onChange={handleOnChange}
                />
                <p>Otoño</p>
              </label>
              <label>
                <input
                  type="radio"
                  value="Invierno"
                  name="season"
                  onChange={handleOnChange}
                />
                <p>Invierno</p>
              </label>
            </div>
            <div className="season_error">
              {error.season && <p>{error.season}</p>}
            </div>
            <label className="cou">Country</label>
            <div className="form_country">
              <select onChange={(e) => handleSelect(e)}>
                {ordered &&
                  ordered.map((e, i) => (
                    <option value={e.name} key={e.id + i}>
                      {e.name}
                    </option>
                  ))}
              </select>
              <div className="countries_error">
                {error.country && <p>{error.country}</p>}
              </div>
            </div>
            <div className="selecto-container">
              <div className="country_selecto">
                {input.country.map((e) => (
                  <ul key={e}>
                    <p className="element_selecto">{e}</p>
                    <button
                      className="button_selection"
                      type="button"
                      onClick={() => handleDelete(e)}
                    >
                      X
                    </button>
                  </ul>
                ))}
              </div>
            </div>
            <div>
              <button className="form_createbtn" type="submit">
                Create
              </button>
            </div>
          </>
        </form>
      </div>
    </div>
  );
};

export default Form;
