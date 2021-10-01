import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import AutoSizer from 'react-virtualized-auto-sizer';

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
    <AutoSizer disableWidth>
    {({height}) => (
      <div style={{height: height}} className={classes.root}>
        <ToDo />
      </div>
    )}
    </AutoSizer>
  );
};

export default Layout;
