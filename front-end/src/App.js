import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { configureStore } from './reduxStore';

import theme from './appTheme';
import AppLayout from './appLayout';

const App = () => {

  const reduxStore = configureStore();

  return (
    <Provider store={reduxStore}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppLayout />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
