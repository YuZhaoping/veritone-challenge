import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

import ToDo from './ToDo';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: 640,
    marginTop: 0,
    marginRight: 'auto',
    marginLeft: 'auto',
    padding: 0,
  },
}));

const Layout = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ToDo />
    </div>
  );
};

export default Layout;
