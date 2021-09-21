
// Error action types
const PUBLISH_ERROR = 'publish_error';

const ADD_ERROR = 'add_error';
const REMOVE_ERROR = 'remove_error';

const ADD_ERROR_TO_LIST = 'add_error_to_list';
const REMOVE_ERROR_FROM_LIST = 'remove_error_from_list';

const DECREASE_ERROR_COUNT = 'decrease_error_count';

const ON_ADD_ERROR = 'on_add_error';
const SET_CURRENT_ERROR = 'set_current_error';
const CLEAN_CURRENT_ERROR = 'clean_current_error';

export const errorsActionTypes = {
  PUBLISH_ERROR,

  ADD_ERROR,
  REMOVE_ERROR,

  ADD_ERROR_TO_LIST,
  REMOVE_ERROR_FROM_LIST,

  DECREASE_ERROR_COUNT,

  ON_ADD_ERROR,
  SET_CURRENT_ERROR,
  CLEAN_CURRENT_ERROR,
};


// Error actions
const publishError = (error, nextAction) => ({
  type: PUBLISH_ERROR,
  error,
  nextAction
});

export default publishError;

export const addError = (error) => ({
  type: ADD_ERROR,
  error
});

export const removeError = (error) => ({
  type: REMOVE_ERROR,
  error
});


export const addErrorToList = (error) => ({
  type: ADD_ERROR_TO_LIST,
  error
});

export const removeErrorFromList = (error) => ({
  type: REMOVE_ERROR_FROM_LIST,
  error
});


export const decreaseErrorCount = () => ({
  type: DECREASE_ERROR_COUNT
});


export const onAddError = (error) => ({
  type: ON_ADD_ERROR,
  error
});

export const setCurrentError = (error) => ({
  type: SET_CURRENT_ERROR,
  error
});

export const cleanErrorCount = () => ({
  type: CLEAN_CURRENT_ERROR
});
