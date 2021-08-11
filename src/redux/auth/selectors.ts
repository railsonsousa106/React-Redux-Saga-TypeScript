import { RootState } from '../store';

export const selectIsLoggedIn = (state: RootState) => state.authData.isLogged;

export const selectSignInError = (state: RootState) => state.authData.signInError;

export const selectSignUpError = (state: RootState) => state.authData.signUpError;
