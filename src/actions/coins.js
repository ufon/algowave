import fetch from 'isomorphic-fetch';

import { COINS_REQUEST, COINS_RECEIVE, API_URL } from 'constants/ActionTypes';

const requestCoins = () => ({
  type: COINS_REQUEST
});

const receiveCoins = coins => ({
  type: COINS_RECEIVE,
  payload: coins
});

const fetchСoins = accessToken => dispatch => {
  dispatch(requestCoins());
  return fetch(`${API_URL}/coins?access_token=${accessToken}`)
    .then(response => response.json())
    .then(coins => {
      console.log(coins);
      dispatch(receiveCoins(coins));
    });
};

export { fetchСoins };
