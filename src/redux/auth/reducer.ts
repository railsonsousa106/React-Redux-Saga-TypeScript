import { Action } from '../commonTypes';
import { authActions } from './actions';

const initialState = {
  isLogged: false,
  isFetchingLoggedStatus: true,
  signInError: null,
  signUpError: null,
};

export default function authReducer(state = initialState, action: Action<any>) {
  const { type, payload } = action;

  switch (type) {
    case authActions.SET_IS_AUTH: {
      return {
        ...state,
        isLogged: payload.authStatus,
      };
    }
    case authActions.SET_IS_FETCHING_LOGGED_STATUS: {
      return {
        ...state,
        isFetchingLoggedStatus: payload.isFetching,
      };
    }
    case authActions.SET_SIGN_UP_ERROR: {
      return {
        ...state,
        signUpError: payload.error,
      };
    }
    case authActions.SET_SIGN_IN_ERROR: {
      return {
        ...state,
        signInError: payload.error,
      };
    }
    default:
      return state;
  }
}
