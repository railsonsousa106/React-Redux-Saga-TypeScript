import { takeLatest, all, put, call } from 'redux-saga/effects';
import { FirebaseError } from 'firebase';

import firebase, { authGoogleProvider, authMicrosoftProvider } from '../../utils/firebase';
import { signUpErrors, signInErrors } from '../../utils/errors';
import { authActions } from './actions';
import { SagaAction } from 'redux/commonTypes';
import { PayloadSignUpWithEmail } from './types';

const onAuthStateChanged = () => {
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        resolve(user);
      } else {
        let getCookie = (cname: string) => {
          var name = cname + '=';
          var ca = document.cookie.split(';');
          for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
              c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
              return c.substring(name.length, c.length);
            }
          }
          return '';
        };
        let userName = getCookie('user_profile');

        if (userName) {
          resolve({ displayName: userName });
        } else {
          reject('Error');
        }
      }
    });
  });
};

function* getAuthStatusSaga() {
  try {
    yield call(onAuthStateChanged);
    yield put(authActions.setAuthStatus(true));
    yield put(authActions.setFetchingAuthStatus(false));
  } catch (err) {
    yield put(authActions.setFetchingAuthStatus(false));
  }
}

function* authWithGoogleSaga({ payload }: SagaAction<() => void>) {
  const result = yield firebase.auth().signInWithPopup(authGoogleProvider);

  if (result.user) {
    yield put(authActions.setAuthStatus(true));
  }
}

function* authWithMicrosoftSaga({ payload }: SagaAction<() => void>) {
  const result = yield firebase.auth().signInWithPopup(authMicrosoftProvider);

  if (result.user) {
    yield put(authActions.setAuthStatus(true));
  }
}

function* signOutSaga() {
  yield firebase.auth().signOut();
  yield put(authActions.setAuthStatus(false));
}

function* signUpWithEmailAndPasswordSaga({ payload }: SagaAction<PayloadSignUpWithEmail>) {
  const { actionHandler, email, password } = payload;

  try {
    const result = yield firebase.auth().createUserWithEmailAndPassword(email, password);

    if (result.user) {
      yield put(authActions.setAuthStatus(true));
      yield put(authActions.setSignUpError(null));
      yield call(actionHandler);
    }
  } catch (err) {
    const error: FirebaseError = err;
    const { code } = error;

    yield put(authActions.setSignUpError(signUpErrors[code] || 'Unknown error'));
  }
}

function* signInWithEmailAndPasswordSaga({ payload }: SagaAction<PayloadSignUpWithEmail>) {
  const { actionHandler, email, password } = payload;

  try {
    const result = yield firebase.auth().signInWithEmailAndPassword(email, password);

    if (result.user) {
      yield put(authActions.setAuthStatus(true));
      yield put(authActions.setSignInError(null));
      yield call(actionHandler);
    }
  } catch (err) {
    const error: FirebaseError = err;
    const { code } = error;

    yield put(authActions.setSignInError(signInErrors[code] || 'Unknown error'));
  }
}

export default function* authSaga() {
  yield all([
    takeLatest(authActions.GET_IS_AUTH, getAuthStatusSaga),
    takeLatest(authActions.AUTH_WITH_GOOGLE, authWithGoogleSaga),
    takeLatest(authActions.SIGN_OUT, signOutSaga),
    takeLatest(authActions.SIGN_UP_WITH_EMAIL, signUpWithEmailAndPasswordSaga),
    takeLatest(authActions.SIGN_IN_WITH_EMAIL, signInWithEmailAndPasswordSaga),
    takeLatest(authActions.AUTH_WITH_MICROSOFT, authWithMicrosoftSaga),
  ]);
}
