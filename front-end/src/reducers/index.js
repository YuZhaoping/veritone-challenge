import { combineReducers } from 'redux';

import {
  errorsProfile,
  errorsList
} from './errorsReducer';

const reducers = () => combineReducers({
  errorsProfile,
  errorsList
});

export default reducers;
