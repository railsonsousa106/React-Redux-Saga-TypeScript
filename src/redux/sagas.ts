import { all } from 'redux-saga/effects';

import authSaga from './auth/saga';
import digitalEmployeeSaga from './digitalEmployee/saga';
import modalsSaga from './modals/saga';

export default function* rootSaga() {
  yield all([authSaga(), digitalEmployeeSaga(), modalsSaga()]);
}
