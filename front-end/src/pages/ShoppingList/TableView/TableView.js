import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import ItemsTable from './ItemsTable';
import EditDialog from '../EditDialog';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: 640,
    minHeight: 768,
    marginTop: 16,
    marginRight: 'auto',
    marginLeft: 'auto',
    padding: theme.spacing(1),
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    margin: 0,
  },
  content: {
    flexGrow: 1,
    marginTop: theme.spacing(1),
  },
  titleText: {
    flexGrow: 1,
    fontSize: 16,
  },
}));

const TableView = (props) => {
  const { items, onRowAdd } = props;

  const [openEditDlg, setOpenEditDlg] = useState(false);

  const handleEditDlgOpen = () => {
    setOpenEditDlg(true);
  };

  const handleEditDlgClose = (item) => {
    setOpenEditDlg(false);
    if (item) {
      new Promise((resolve, reject) => {
        onRowAdd && onRowAdd(item);
        resolve();
      });
    }
  };

  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <div className={classes.header}>
        <Typography className={classes.titleText}>
          {'Your items'}
        </Typography>
        <Button variant="contained" color="primary" onClick={handleEditDlgOpen}>
          {'Add Item'}
        </Button>
      </div>
      <div className={classes.content}>
        <Divider />
        <ItemsTable items={items} />
      </div>
      <EditDialog
        open={openEditDlg}
        handleClose={handleEditDlgClose}
      />
    </Paper>
  );
};

export default TableView;
