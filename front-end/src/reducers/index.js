import { combineReducers } from 'redux';

import {
  errorsProfile,
  errorsList
} from './errorsReducer';

const createRootReducer = () => combineReducers({
  errorsProfile,
  errorsList
});

export default createRootReducer;
