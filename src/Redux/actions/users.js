/* eslint-disable no-undef */
import Axios from 'axios';

const URL_STRING = '/api/v1/user/';

export const register = data => {
  return {
    type: 'REGISTER',
    payload: Axios.post(`${URL_STRING}register`, data),
  };
};

export const login = (data, history) => {
  return {
    type: 'LOGIN',
    payload: Axios.post(`${URL_STRING}login`, data)
      .then(res => {
        if (res.status === 200) {
          // eslint-disable-next-line no-alert
          alert('Sukses Register');
          try {
            localStorage.setItem(
              'token',
              JSON.stringify(res.data.result.token),
            );
            history.push('/mainpage');
          } catch (err) {
            console.log("Something's wrong");
          }
        }
      })
      .catch(err => {
        console.log(err);

        // eslint-disable-next-line no-alert
        alert('Your email/ password is wrong');
      }),
  };
};
