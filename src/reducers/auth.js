import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from 'constants/ActionTypes';

const initialState = {
  accessToken: null,
  isAuthenticated: false,
  isLoading: false,
  hasErrors: false,
  user: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        accessToken: action.payload,
        isAuthenticated: true,
        isLoading: false,
        user: action.user
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        hasErrors: true,
        isLoading: false
      };
    case LOGOUT:
      return {
        ...initialState
      };
    default:
      return state;
  }
}
