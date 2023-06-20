import axios from "axios";
const { REACT_APP_LOCAL_URL, REACT_APP_URL } = process.env;

export const getCountries = () => {
  return async function (dispatch) {
    //const response = await axios.get(`${REACT_APP_LOCAL_URL}/countries`);
    const response = await axios.get(`${REACT_APP_URL}/countries`);
    return dispatch({
      type: "GET_COUNTRIES",
      payload: response.data,
    });
  };
};

export const getActivity = () => {
  return async function (dispatch) {
    //const response = await axios.get(`${REACT_APP_LOCAL_URL}/activity`);
    const response = await axios.get(`${REACT_APP_URL}/activity`);
    return dispatch({
      type: "GET_ACTIVITY",
      payload: response.data,
    });
  };
};

export const getCountryById = (id) => {
  return async function (dispatch) {
    //const response = await axios.get(`${REACT_APP_LOCAL_URL}/countries/${id}`);
    const response = await axios.get(`${REACT_APP_URL}/countries/${id}`);
    return dispatch({
      type: "GET_COUNTRY_BY_ID",
      payload: response.data,
    });
  };
};

export function sortByName(payload) {
  return {
    type: "SORT_COUNTRIES_BY_NAME",
    payload,
  };
}

export function sortByPopulation(payload) {
  return {
    type: "SORT_COUNTRIES_BY_POPULATION",
    payload,
  };
}

export function filterByContinent(order) {
  return {
    type: "FILTER_BY_CONTINENT",
    payload: order,
  };
}

export function searchCountries(name) {
  return {
    type: "SEARCH_COUNTRIES",
    payload: name,
  };
}

export function filterByActivity(payload) {
  return {
    type: "FILTER_BY_ACTIVITY",
    payload,
  };
}

export function postActivity(payload) {
  return async function () {
    //const json = await axios.post(`${REACT_APP_LOCAL_URL}/activity`, payload);
    const json = await axios.post(`${REACT_APP_URL}/activity`, payload);
    return json;
  };
}

export function deleteActivity(id, countryId) {
  return async function (dispatch) {
    //await axios.put(`${REACT_APP_LOCAL_URL}/activity/delete/${id}`, {
    await axios.put(`${REACT_APP_URL}/activity/delete/${id}`, {
      countryId,
    });
    return dispatch({
      type: "DELETE_ACTIVITY",
    });
  };
}

export function updateActivity(id, data) {
  return async function (dispatch) {
    //await axios.put(`${REACT_APP_LOCAL_URL}/activity/${id}`, data);
    await axios.put(`${REACT_APP_URL}/activity/${id}`, data);
    return dispatch({
      type: "UPDATE_ACTIVITY",
    });
  };
}

export function clearState(payload) {
  return {
    type: "CLEAR_STATE",
    payload,
  };
}

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY_BY_ID = "GET_COUNTRY_BY_ID";
export const GET_ACTIVITY = "GET_ACTIVITY";
export const SORT_COUNTRIES_BY_NAME = "SORT_COUNTRIES_BY_NAME";
export const SORT_COUNTRIES_BY_POPULATION = "SORT_COUNTRIES_BY_POPULATION";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const SEARCH_COUNTRIES = "SEARCH_COUNTRIES";
export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY";
export const DELETE_ACTIVITY = "DELETE_ACTIVITY";
export const UPDATE_ACTIVITY = "UPDATE_ACTIVITY";
export const CLEAR_STATE = "CLEAR_STATE";
