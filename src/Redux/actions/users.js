/* eslint-disable no-undef */
import Axios from 'axios';

const URL_STRING = 'http://192.168.100.168:3009/api/v1/user/';

export const register = data => {
  return {
    type: 'REGISTER',
    payload: Axios.post(`${URL_STRING}register`, data),
  };
};

export const login = (data, props) => {
  return {
    type: 'LOGIN',
    payload: Axios.post(`${URL_STRING}login`, data)
      .then(res => {
        if (res.status === 200) {
          // eslint-disable-next-line no-alert
          alert('Sukses!');
          try {
            // localStorage.setItem(
            //   'token',
            //   JSON.stringify(res.data.result.token),

            // );
            props.navigate('MainPage');
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
