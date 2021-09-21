import { errorsActionTypes as types } from '../actions/errorsAction';

const initialErrorsList = {
  errors: []
};

const initialErrorsProfile = {
  errorCount: 0,
  currentError: null,
  isNew: false
};

const addError = function(list, error) {
  list.unshift(error);
  return list;
};

const removeError = function(list, error) {
  list.some((e, index) => {
    if (e === error) {
      list.splice(index, 1);
      return true;
    }
  });
  return list;
};

export const errorsList = (state = initialErrorsList, action) => {
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

export const errorsProfile = (state = initialErrorsProfile, action) => {
  switch (action.type) {
    case types.DECREASE_ERROR_COUNT:
      {
        const count = state.errorCount - 1;
        return { ...state,
          errorCount: count,
          isNew: false
        };
      }

    case types.ON_ADD_ERROR:
      {
        const count = state.errorCount + 1;
        return { ...state,
          errorCount: count,
          currentError: action.error,
          isNew: true
        };
      }

    case types.SET_CURRENT_ERROR:
      return { ...state,
        currentError: action.error,
        isNew: false
      };

    case types.CLEAN_CURRENT_ERROR:
      return { ...state,
        currentError: null,
        isNew: false
      };

    default:
      return state;
  }
};
