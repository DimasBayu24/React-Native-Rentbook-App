import Axios from 'axios';

const URL_STRING = '/api/v1/book/genre';

export const getAllGenre = () => {
  return {
    type: 'GET_GENRE',
    payload: Axios.get(URL_STRING),
  };
};
