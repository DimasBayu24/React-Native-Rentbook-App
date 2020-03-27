import Axios from 'axios';

const URL_STRING = '/api/v1/';

export const getAllBook = pageNumber => {
  return {
    type: 'GET_BOOK',
    payload: Axios.get(URL_STRING + `?page=${pageNumber}`),
  };
};

export const getAvail = () => {
  return {
    type: 'GET_AVAIL',
    payload: Axios.get(`${URL_STRING}availability/avail`),
  };
};

export const getSearch = data => {
  return {
    type: 'GET_SEARCH',
    payload: Axios.get(`${URL_STRING}search/${data}`),
  };
};

export const getSortTitle = () => {
  return {
    type: 'GET_TITLE',
    payload: Axios.get(`${URL_STRING}sortbook/title`),
  };
};

export const getSortDate = () => {
  return {
    type: 'GET_DATE',
    payload: Axios.get(`${URL_STRING}sortdate/date`),
  };
};

export const getSortGenre = () => {
  return {
    type: 'GET_GENRE',
    payload: Axios.get(`${URL_STRING}sortgenre/genre`),
  };
};

export const postNewBook = data => {
  return {
    type: 'POST_BOOK',
    payload: Axios.post(`${URL_STRING}addbook`, data),
  };
};
