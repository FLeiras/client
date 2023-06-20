import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import Home from "./components/home/Home";
import Form from "./components/form/Form";
import About from "./components/about/About";
import CountryDetail from "./components/countryDetail/CountryDetail";
import PageNotFound from "./components/404/PageNotFound";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/post" element={<Form />} />
        <Route path="/home/:id" element={<CountryDetail />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
