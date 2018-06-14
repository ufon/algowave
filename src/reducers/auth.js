import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST
} from 'constants/ActionTypes';

const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
  accessToken: user !== null ? user.access_token : null,
  isAuthenticated: user !== null,
  isLoading: false,
  hasErrors: false,
  errorInfo: '',
  user: user !== null ? user : null
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
        isAuthenticated: true,
        isLoading: false,
        user: action.payload
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        hasErrors: true,
        errorInfo: action.payload,
        isLoading: false
      };
    case LOGOUT_REQUEST:
      return {
        ...initialState
      };
    default:
      return state;
  }
}
