import Axios from 'axios';

const URL_STRING = 'http://192.168.100.168:3009/api/v1/book/genre';

export const getAllGenre = () => {
  return {
    type: 'GET_GENRE',
    payload: Axios.get(URL_STRING),
  };
};
