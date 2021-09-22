import { errorsActionTypes as types } from '../actions/errorsAction';

const initialErrorsList = () => ({
  errors: []
});

const initialErrorsProfile = () => ({
  errorCount: 0,
  currentError: null,
  isNew: false
});

function addError(list, error) {
  list.unshift(error);
  return list;
};

function removeError(list, error) {
  list.some((e, index) => {
    if (e === error) {
      list.splice(index, 1);
      return true;
    }
  });
  return list;
};

export const errorsList = (state = initialErrorsList(), action) => {
  switch (action.type) {
    case types.ADD_ERROR_TO_LIST:
      {
        const errors = addError(state.errors, action.error);
        return {
          errors: errors
        };
      }

    case types.REMOVE_ERROR_FROM_LIST:
      {
        const errors = removeError(state.errors, action.error);
        return {
          errors: errors
        };
      }

    default:
      return state;
  }
};

export const errorsProfile = (state = initialErrorsProfile(), action) => {
  switch (action.type) {
    case types.ON_ERROR_ADDED:
      {
        const count = state.errorCount + 1;
        return {
          errorCount: count,
          currentError: action.error,
          isNew: true
        };
      }

    case types.ON_ERROR_REMOVED:
      {
        const count = state.errorCount - 1;
        return {
          errorCount: count,
          currentError: action.nextError,
          isNew: false
        };
      }

    case types.SET_CURRENT_ERROR:
      return {
        errorCount: state.errorCount,
        currentError: action.error,
        isNew: false
      };

    case types.CLEAN_CURRENT_ERROR:
      return {
        errorCount: state.errorCount,
        currentError: null,
        isNew: false
      };

    default:
      return state;
  }
};
