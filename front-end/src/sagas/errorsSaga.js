import { all, fork, put, takeEvery } from 'redux-saga/effects';

import {
  errorsActionTypes as types,

  addErrorAction,
  addErrorToListAction,
  removeErrorFromListAction,
  onAddErrorAction,
  decreaseErrorCountAction
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
// ADD_ERROR --> saga() --> [ADD_ERROR_TO_LIST, ON_ADD_ERROR] --> reducer()

function* doAddError({ error }) {
  yield put(addErrorToListAction(error));
  yield put(onAddErrorAction(error));
}

export function* addError() {
  yield takeEvery(types.ADD_ERROR, doAddError);
}

// --- Handle REMOVE_ERROR action ---
// REMOVE_ERROR --> saga() --> [REMOVE_ERROR_FROM_LIST, DECREASE_ERROR_COUNT] --> reducer()

function* doRemoveError({ error }) {
  yield put(removeErrorFromListAction(error));
  yield put(decreaseErrorCountAction());
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
