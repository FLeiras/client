import React from 'react';
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { clearState, getCountryById } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import giphy from "../../props/giphy.gif";
import ActivityCard from "../activity/ActivityCard";
import { BsBoxArrowLeft } from "react-icons/bs";
import "./CountryDetail.css";

function CountryDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const country = useSelector((state) => state.countryDetails);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(getCountryById(id));
    return () => {
      dispatch(clearState());
    };
  }, [dispatch, id]);

  if (!country.img && loading) {
    setLoading(!loading);
  }

  return (
    <div className="detail_container">
      <div className="detail_blur">
        <div className="volver-detail">
          <Link to="/home">
            <BsBoxArrowLeft className="icon-detail" />
          </Link>
        </div>
        {!!country.img ? (
          <img
            src={country.img}
            width="430px"
            height="220px"
            alt={country.name}
          />
        ) : (
          <img src={giphy} alt="Loading" width="430" height="350px" />
        )}

        <div className="detail_info">
          <h3>{country.name}</h3>
          <div className="detail-country">
            <p>
              <strong>{`#${" "}`}</strong>
              {country.id}
            </p>
            <p>
              <strong>{`Capital:${" "}`}</strong>
              {country.capital}
            </p>
            <p>
              <strong>{`Continente:${" "}`}</strong>
              {country.continent}
            </p>
            <p>
              <strong>{`SubRegion:${" "}`}</strong>
              {country.subregion}
            </p>
            <p>
              <strong>{`Area:${" "}`}</strong>
              {country.area} km²
            </p>
            <p>
              <strong>{`Población:${" "}`}</strong>
              {country.population}
            </p>
          </div>
        </div>
        <div className="activity-container">
          <div className="detail_activity">
            {country.activities && country.activities?.map((e) => (
              <ActivityCard
                id={e.id}
                name={e.name}
                difficult={e.difficult}
                duration={e.duration}
                season={e.season}
                key={e.id}
                countryId={id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetail;
