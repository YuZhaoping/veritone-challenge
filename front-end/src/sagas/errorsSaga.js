import { all, fork, put, takeEvery, select } from 'redux-saga/effects';

import {
  errorsActionTypes as types,

  addErrorAction,
  addErrorToListAction,
  removeErrorFromListAction,
  onErrorAddedAction,
  onErrorRemovedAction
} from '../actions/errorsAction';

// --- Handle PUBLISH_ERROR action ---
// PUBLISH_ERROR --> saga() --> [ADD_ERROR, nextAction(error)] --> [saga(), saga/reducer]

function* doPublishError({ error, nextAction }) {
  if (nextAction) {
    yield put(nextAction(error));
  }
  yield put(addErrorAction(error));
}

function* asyncPublishError(action) {
  yield fork(doPublishError, action);
};

export function* publishError() {
  yield takeEvery(types.PUBLISH_ERROR, asyncPublishError);
}

// --- Handle ADD_ERROR action ---
// ADD_ERROR --> saga() --> [ADD_ERROR_TO_LIST, ON_ERROR_ADDED] --> reducer()

function* doAddError({ error }) {
  yield put(addErrorToListAction(error));
  yield put(onErrorAddedAction(error));
}

export function* addError() {
  yield takeEvery(types.ADD_ERROR, doAddError);
}

// --- Handle REMOVE_ERROR action ---
// REMOVE_ERROR --> saga() --> [REMOVE_ERROR_FROM_LIST, ON_ERROR_REMOVED] --> reducer()

const getNextError = ({ errorsList }) => {
  const errors = errorsList.errors;
  return (errors.length > 0) ? errors[0] : null;
}

function* doRemoveError({ error }) {
  yield put(removeErrorFromListAction(error));
  const nextError = yield select(getNextError);
  yield put(onErrorRemovedAction(nextError));
}

export function* removeError() {
  yield takeEvery(types.REMOVE_ERROR, doRemoveError);
}

// --- Errors' root saga ---
export default function* errorsSaga() {
  yield all([
    fork(publishError),
    fork(addError),
    fork(removeError)
  ]);
}
