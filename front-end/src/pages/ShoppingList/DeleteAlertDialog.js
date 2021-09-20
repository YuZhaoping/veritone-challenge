import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

export default function DeleteAlertDialog(props) {
  const { open, handleClose } = props;

  const onClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      handleClose(false);
    }
  };

  const onConfirm = () => {
    handleClose(true);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="shopping-item-delete-alert-dialog"
      disableEscapeKeyDown
    >
      <DialogTitle>{"Delete Item?"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete the item? this can not be undone.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>
          Cancel
        </Button>
        <Button onClick={onConfirm} variant="contained" color="primary" autoFocus>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}
