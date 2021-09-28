import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import {
  errorsProfile,
  errorsList
} from './errorsReducer';

const reducers = (history) => combineReducers({
  router: connectRouter(history),
  errorsProfile,
  errorsList
});

export default reducers;
