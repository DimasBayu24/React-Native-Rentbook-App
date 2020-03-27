import Axios from 'axios';

const URL_STRING = 'http://192.168.100.168:3009/api/v1/';

export const getBookById = id => {
  return {
    type: 'GET_ID',
    payload: Axios.get(URL_STRING + id),
  };
};

export const rentBookRedux = (id, data) => {
  return {
    type: 'PATCH_RENT',
    payload: Axios.patch(`${URL_STRING}rent/${id}`, data),
  };
};

export const returnBook = (id, data) => {
  return {
    type: 'PATCH_RETURN',
    payload: Axios.patch(`${URL_STRING}return/${id}`, data),
  };
};

export const updateBook = (id, data) => {
  return {
    type: 'PATCH_UPDATE',
    payload: Axios.patch(URL_STRING + id, data),
  };
};

export const deleteBook = id => {
  return {
    type: 'DELETE_BOOK',
    payload: Axios.delete(URL_STRING + id),
  };
};
