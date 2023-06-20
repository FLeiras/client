import React from 'react';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountries,
  getActivity,
  sortByName,
  filterByContinent,
  filterByActivity,
  sortByPopulation,
} from "../../redux/actions";
import Nav from "../nav/Nav";
import Paginado from "../paginado/Paginado";
import Card from "../cards/Card";
import Footer from "../footer/Footer";
import giphy from "../../props/giphy.gif";
import { AiOutlineUndo } from "react-icons/ai";
import SearchBar from "../searchBar/SearchBar";
import NotFound from "../notFound/NotFound";
import "./Home.css";

function Home() {
  const [, setRefreshState] = useState(false);
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState(1);
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);
  const allActivity = useSelector((state) => state.activity);
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 10;
  const pages = Math.ceil(allCountries.length / countriesPerPage);
  const lastIndex = currentPage * countriesPerPage;
  const firstIndex = lastIndex - countriesPerPage;
  let countryCurrent =
    allCountries.length > 0 && allCountries.slice(firstIndex, lastIndex);
  const paginado = (numPage) => {
    setCurrentPage(numPage);
  };

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivity());
  }, [dispatch]);

  function handleClick() {
    window.location.reload();
  }

  function handleSortByName(e) {
    dispatch(sortByName(e.target.value));
    setRefreshState((prevState) => !prevState);
    setCurrentPage(1);
    setInput(1);
  }

  function handleSortByPopulation(e) {
    dispatch(sortByPopulation(e.target.value));
    setRefreshState((prevState) => !prevState);
    setCurrentPage(1);
    setInput(1);
  }

  function handleSortByContinent(e) {
    dispatch(filterByContinent(e.target.value));
    setCurrentPage(1);
    setInput(1);
    setRefreshState((prevState) => !prevState);
  }

  function handleFilterByActivity(e) {
    e.preventDefault();
    dispatch(filterByActivity(e.target.value));
    setCurrentPage(1);
    setInput(1);
    setRefreshState((prevState) => !prevState);
  }

  if (countryCurrent && loading) {
    setLoading(false);
  }

  return (
    <div className="home_container">
      <div className="home_nav">
        <Nav />
      </div>
      <div className="fil-search">
        <SearchBar />
        <div className="home_filters">
          <select
            onChange={(e) => {
              handleSortByPopulation(e);
            }}
          >
            <option value="All">Ordena por Población</option>
            <option value="may"> Mayor </option>
            <option value="men"> Menor </option>
          </select>
          <select
            onChange={(e) => {
              handleSortByName(e);
            }}
            className="filterName"
          >
            <option value="All"> Ordena por Nombre </option>
            <option value="asc">A-Z</option>
            <option value="des">Z-A</option>
          </select>
          <select
            onChange={(e) => {
              handleSortByContinent(e);
            }}
            className="filterContinent"
          >
            <option value="All">Elegi el Continente</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Antarctic">Antartica</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europa</option>
            <option value="Oceania">Oceania</option>
          </select>
          <select
            onChange={(e) => handleFilterByActivity(e)}
            className="filterAct"
          >
            <option hidden value="All">
              Elegi Act. Turistica
            </option>
            {allActivity && allActivity?.map((e) => (
              <option value={e.name} key={e.id}>
                {" "}
                {e.name.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="home_reload">
        <AiOutlineUndo
          className="reload-home"
          onClick={(e) => {
            handleClick(e);
          }}
        />
      </div>
      <div className="menu__pagination__container mb-3 mt-3">
        {
          <Paginado
            countriesPerPage={countriesPerPage}
            allCountries={allCountries.length}
            thisPage={currentPage}
            paginado={paginado}
            input={input}
            setInput={setInput}
            pages={pages}
          />
        }
      </div>
      <div className="home_cards">
        {countryCurrent.length > 0 && !loading ? (
          countryCurrent.map((e) => (
            <Card
              name={e.name}
              continent={e.continent}
              img={e.img}
              subregion={e.subregion}
              population={e.population}
              id={e.id}
              key={e.id}
            />
          ))
        ) : !countryCurrent && loading ? (
          <img
            src={giphy}
            alt="Loading"
            className="loading"
            width="500px"
            height="500px"
          />
        ) : (
          <NotFound />
        )}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
