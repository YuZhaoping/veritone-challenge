import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Dashboard from './Dashboard';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: 640,
    marginTop: 0,
    marginRight: 'auto',
    marginLeft: 'auto',
    padding: theme.spacing(3),
  },
}));

const Layout = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Dashboard />
    </div>
  );
};

export default Layout;