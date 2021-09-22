import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import ErrorMessage from './ErrorMessage';

const useStyles = makeStyles(theme => ({
  toolbar: {
    position: 'relative',
  },
}));

const Header = () => {

  const classes = useStyles();

  return (
    <AppBar position='static'>
      <Toolbar className={classes.toolbar}>
        <Typography>SHOPPING LIST</Typography>
        <ErrorMessage />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
