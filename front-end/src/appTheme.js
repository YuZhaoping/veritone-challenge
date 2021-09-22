import createTheme from '@material-ui/core/styles/createTheme';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Nunito',
      'sans-serif',
    ].join(','),
    fontWeightBold: 600,
    button: {
      textTransform: 'none',
    },
  },
});

export default theme;
