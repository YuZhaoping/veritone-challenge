import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import configureStore, { history } from './reduxStore';

import theme from './appTheme';
import AppLayout from './appLayout';

const App = () => {

  const reduxStore = configureStore();

  return (
    <Provider store={reduxStore}>
      <ConnectedRouter history={history}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppLayout />
        </ThemeProvider>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
