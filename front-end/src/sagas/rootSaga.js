import { all } from 'redux-saga/effects';

import errorsSaga from './errorsSaga';

export default function* rootSaga() {
  yield all([
    errorsSaga()
  ]);
}
