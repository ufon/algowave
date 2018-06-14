import fetch from 'isomorphic-fetch';

import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, API_URL } from 'constants/ActionTypes';

// const requestNews = () => ({
//   type: REQUEST_NEWS,
// });

// const receiveNews = news => ({
//   type: RECEIVE_NEWS,
//   payload: news,
// });

// const endNews = () => ({
//   type: END_NEWS,
// });

// const clearFeed = () => ({
//   type: CLEAR_FEED,
// });

// const clearAction = () => dispatch => {
//   dispatch(clearFeed());
//   dispatch(paginationReset());
// };

// const fetchNewsByQuery = (page, query = '') => dispatch => {
//   if (page === 1) dispatch(clearAction());
//   dispatch(requestNews());
//   return fetch(`${API_URL}/everything?q=${query}&pageSize=${PAGE_SIZE}&page=${page}&apiKey=${API_KEY}`)
//     .then(response => response.json())
//     .then(news => (news.articles.length === 0 ? dispatch(endNews()) : dispatch(receiveNews(news.articles))));
// };

// const fetchNews = page => dispatch => {
//   if (page === 1) dispatch(clearAction());
//   dispatch(requestNews());
//   return fetch(`${API_URL}/top-headlines?country=ru&pageSize=${PAGE_SIZE}&page=${page}&apiKey=${API_KEY}`)
//     .then(response => response.json())
//     .then(news => (news.articles.length === 0 ? dispatch(endNews()) : dispatch(receiveNews(news.articles))));
// };

const login = (name, pass) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
    },
    body: `email=${encodeURIComponent(name)}&pwd=${encodeURIComponent(pass)}`
  };

  return fetch(`${API_URL}/login`, options)
    .then(response => response.json())
    .then(user => {
      // login successful if there's a jwt token in the response
      if (user.profile) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user.profile));
      }
      return user.profile;
    });
};

const logout = () => {
  localStorage.removeItem('user');
};

export { login, logout };
