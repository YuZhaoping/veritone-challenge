import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from './appTheme';

import { TestComponent } from './components/tests';

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TestComponent />
    </ThemeProvider>
  );
};

export default App;
