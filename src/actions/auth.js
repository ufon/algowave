import fetch from 'isomorphic-fetch';

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  API_URL
} from 'constants/ActionTypes';

const request = () => ({
  type: LOGIN_REQUEST
});

const logoutRequest = () => ({
  type: LOGOUT_REQUEST
});

const success = user => ({
  payload: user,
  type: LOGIN_SUCCESS
});

const failure = error => ({
  payload: error,
  type: LOGIN_FAILURE
});

const login = (name, pass) => dispatch => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
    },
    body: `email=${encodeURIComponent(name)}&pwd=${encodeURIComponent(pass)}`
  };

  dispatch(request());

  return fetch(`${API_URL}/login`, options)
    .then(response => response.json(), error => dispatch(failure(error)))
    .then(user => {
      console.log(user);
      if (user.profile) {
        console.log('success');
        dispatch(success(user.profile));
        localStorage.setItem('user', JSON.stringify(user.profile));
      } else {
        console.log('error');
        dispatch(failure(user.error));
      }
      return user.profile;
    });
};

const logout = () => {
  localStorage.removeItem('user');
};

export { login, logout };
