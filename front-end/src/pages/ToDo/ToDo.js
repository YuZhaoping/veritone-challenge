import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

const ToDo = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      {'TODO'}
    </div>
  );
};

export default ToDo;
