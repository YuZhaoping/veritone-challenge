import React from 'react';
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Dosis',
      'sans-serif',
    ].join(','),
    fontWeightBold: 600,
  },
});

export default theme;
