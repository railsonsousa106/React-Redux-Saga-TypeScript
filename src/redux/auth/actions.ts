import { Action } from '../commonTypes';
import { AuthStatus, Error, IsFetching, PayloadSignUpWithEmail } from './types';

const prefix = '[Auth]';

const TYPES = {
  SIGN_UP_WITH_EMAIL: `${prefix} sign-up-with-email`,
  SIGN_IN_WITH_EMAIL: `${prefix} sign-in-with-email`,
  SET_IS_AUTH: `${prefix} set-is-auth`,
  SIGN_OUT: `${prefix} sign-out`,
  SET_SIGN_UP_ERROR: `${prefix} set-sign-up-error`,
  SET_SIGN_IN_ERROR: `${prefix} set-sign-in-error`,
  SET_IS_FETCHING_LOGGED_STATUS: `${prefix} set-is-fetching-logged-status`,
  GET_IS_AUTH: `${prefix} get-is-auth`,
  AUTH_WITH_GOOGLE: `${prefix} auth-with-google`,
  AUTH_WITH_MICROSOFT: `${prefix} auth-with-microsoft`,
};

export const authActions = {
  ...TYPES,
  signUpWithEmail: (payload: PayloadSignUpWithEmail): Action<PayloadSignUpWithEmail> => ({
    type: TYPES.SIGN_UP_WITH_EMAIL,
    payload,
  }),
  signInWithEmail: (payload: PayloadSignUpWithEmail): Action<PayloadSignUpWithEmail> => ({
    type: TYPES.SIGN_IN_WITH_EMAIL,
    payload,
  }),
  setAuthStatus: (authStatus: boolean): Action<AuthStatus> => ({
    type: TYPES.SET_IS_AUTH,
    payload: { authStatus },
  }),
  signOut: (): Action => ({
    type: TYPES.SIGN_OUT,
  }),
  setSignUpError: (error: string | null): Action<Error> => ({
    type: TYPES.SET_SIGN_UP_ERROR,
    payload: { error },
  }),
  setSignInError: (error: string | null): Action<Error> => ({
    type: TYPES.SET_SIGN_IN_ERROR,
    payload: { error },
  }),
  setFetchingAuthStatus: (isFetching: boolean): Action<IsFetching> => ({
    type: TYPES.SET_IS_FETCHING_LOGGED_STATUS,
    payload: { isFetching },
  }),
  getAuthStatus: (): Action => ({
    type: TYPES.GET_IS_AUTH,
  }),
  authWithGoogle: (closeHandler: () => void): Action => ({
    type: TYPES.AUTH_WITH_MICROSOFT,
    payload: closeHandler,
  }),
  authWithMicrosoft: (closeHandler: () => void): Action => ({
    type: TYPES.AUTH_WITH_MICROSOFT,
    payload: closeHandler,
  }),
};
