import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import reducers from './reducers';
import rootSaga from './sagas/rootSaga';

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware, routerMiddleware(history)];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    reducers(history),
    preloadedState,
    composeEnhancers(
      applyMiddleware(...middlewares)
    )
 );

  sagaMiddleware.run(rootSaga);

  return store;
}
