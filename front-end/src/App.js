import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from './appTheme';

import { TestComponent } from './components/tests';

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <TestComponent />
    </ThemeProvider>
  );
};

export default App;
