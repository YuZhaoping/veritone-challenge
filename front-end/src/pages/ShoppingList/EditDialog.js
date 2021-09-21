import React, { useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Dialog from '@material-ui/core/Dialog';
import Paper from '@material-ui/core/Paper';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
    padding: 0,
    width: 560,
    height: 768,
  },
  dlgTitle: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.grey[200],
    margin: 0,
    padding: theme.spacing(1, 1, 1, 2),
  },
  titleText: {
    flexGrow: 1,
  },
  dlgContent: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(3, 2, 2, 2),
  },
  inputField: {
    marginTop: theme.spacing(2),
  },
  dlgActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
    padding: theme.spacing(1, 2),
  },
}));

const defaultItem = {
  itemName: '',
  itemDesc: '',
  amount: ''
};

const toEditItem = (item) => {
  if (item) {
    const editItem = {...defaultItem, ...item};
    if (editItem.amount === 0) {
      editItem.amount = '';
    }
    return editItem;
  } else {
    return defaultItem;
  }
};

export default function EditDialog(props) {
  const { open, handleClose, item } = props;

  const [editData, setEditData] = useState(toEditItem(item));

  const isAdd = !item;

  const onClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      handleClose();
    }
  };

  const onSubmit = () => {
    const item = {
      itemName: editData.itemName.trim(),
      itemDesc: editData.itemDesc.trim(),
      amount: editData.amount
    };
    if (item.amount === '') {
      item.amount = 0
    }
    if (item.itemName !== '') {
      handleClose(item);
    }
  };

  const handleFieldChange = event => {
    event.persist();
    setEditData(editData => ({
      ...editData,
      [event.target.name]:
        event.target.type === 'checkbox'
          ? event.target.checked
          : event.target.value
    }));
  };

  const classes = useStyles();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="shopping-item-edit-dialog"
      disableEscapeKeyDown
    >
      <Paper className={classes.root}>
      <DialogTitle className={classes.dlgTitle} disableTypography>
        <Typography className={classes.titleText}>{'SHOPPING LIST'}</Typography>
        <IconButton aria-label="close" onClick={onClose}>
          <span className="material-icons-outlined md-18">last_page</span>
        </IconButton>
      </DialogTitle>
      <DialogContent className={classes.dlgContent}>
        <Typography variant="subtitle1">
          {isAdd ? 'Add an Item' : 'Edit an Item'}
        </Typography>
        <Typography color="textSecondary">
          {isAdd ? 'Add your new item below' : 'Edit your item below'}
        </Typography>
        <TextField
          className={classes.inputField}
          label="Item Name"
          name="itemName"
          value={editData.itemName}
          onChange={handleFieldChange}
          variant="outlined"
        />
        <TextField
          className={classes.inputField}
          label="Description"
          name="itemDesc"
          value={editData.itemDesc}
          onChange={handleFieldChange}
          multiline
          rows={5}
          variant="outlined"
        />
        <FormControl className={classes.inputField} variant="outlined">
          <InputLabel>How many?</InputLabel>
          <Select
            name="amount"
            value={editData.amount}
            onChange={handleFieldChange}
            label="How many?"
          >
            <MenuItem value={''} key={0}>&nbsp;</MenuItem>
            {[1, 2, 3, 4, 5].map((val) => (
              <MenuItem value={val} key={val}>{val}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControlLabel
          disabled={isAdd}
          className={classes.inputField}
          label="Purchased"
          value="purchased"
          control={<Checkbox color="primary" />}
          labelPlacement="end"
        />
      </DialogContent>
      <DialogActions className={classes.dlgActions}>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" color="primary" onClick={onSubmit}>
          {isAdd ? 'Add Item' : 'Save Item'}
        </Button>
      </DialogActions>
      </Paper>
    </Dialog>
  );
}
