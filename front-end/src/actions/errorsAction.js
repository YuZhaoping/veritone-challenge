
// --- Error action types ---
const PUBLISH_ERROR = 'publish_error';

const ADD_ERROR = 'add_error';
const REMOVE_ERROR = 'remove_error';

const ADD_ERROR_TO_LIST = 'add_error_to_list';
const REMOVE_ERROR_FROM_LIST = 'remove_error_from_list';

const ON_ADD_ERROR = 'on_add_error';
const DECREASE_ERROR_COUNT = 'decrease_error_count';

const SET_CURRENT_ERROR = 'set_current_error';
const CLEAN_CURRENT_ERROR = 'clean_current_error';

export const errorsActionTypes = {
  PUBLISH_ERROR,

  ADD_ERROR,
  REMOVE_ERROR,

  ADD_ERROR_TO_LIST,
  REMOVE_ERROR_FROM_LIST,

  ON_ADD_ERROR,
  DECREASE_ERROR_COUNT,

  SET_CURRENT_ERROR,
  CLEAN_CURRENT_ERROR,
};

// --- Error actions ---

// PUBLISH_ERROR --> saga() --> [ADD_ERROR, nextAction(error)] --> [saga(), saga/reducer]
// ADD_ERROR --> saga() --> [ADD_ERROR_TO_LIST, ON_ADD_ERROR] --> reducer()
// REMOVE_ERROR --> saga() --> [REMOVE_ERROR_FROM_LIST, DECREASE_ERROR_COUNT] --> reducer()
// SET_CURRENT_ERROR --> reducer()
// CLEAN_CURRENT_ERROR --> reducer()

const publishErrorAction = (error, nextAction) => ({
  type: PUBLISH_ERROR,
  error,
  nextAction
});

export default publishErrorAction;

export const addErrorAction = (error) => ({
  type: ADD_ERROR,
  error
});

export const removeErrorAction = (error) => ({
  type: REMOVE_ERROR,
  error
});


export const addErrorToListAction = (error) => ({
  type: ADD_ERROR_TO_LIST,
  error
});

export const removeErrorFromListAction = (error) => ({
  type: REMOVE_ERROR_FROM_LIST,
  error
});


export const onAddErrorAction = (error) => ({
  type: ON_ADD_ERROR,
  error
});

export const decreaseErrorCountAction = () => ({
  type: DECREASE_ERROR_COUNT
});


export const setCurrentErrorAction = (error) => ({
  type: SET_CURRENT_ERROR,
  error
});

export const cleanErrorCountAction = () => ({
  type: CLEAN_CURRENT_ERROR
});
