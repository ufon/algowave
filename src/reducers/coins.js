import { COINS_REQUEST, COINS_RECEIVE } from 'constants/ActionTypes';

const initialState = {
  isFetching: true,
  items: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case COINS_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case COINS_RECEIVE:
      return {
        ...state,
        isFetching: false,
        items: [...action.payload]
      };
    default:
      return state;
  }
};
