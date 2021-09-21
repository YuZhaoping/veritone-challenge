import React, { useState } from 'react';

import LoadingSpinner from '../../components/LoadingSpinner';

import EmptyView from './EmptyView';
import TableView from './TableView';
import EditDialog from './EditDialog';
import DeleteAlertDialog from './DeleteAlertDialog';

export default function ViewEntry(props) {
  const {
    items,
    handleRowAdd,
    handleRowUpdate,
    handleRowDelete,
    loading
  } = props

  const [editDlgState, setEditDlgState] = useState(() => ({open: false, item: null}));
  const [deleteAlertDlgState, setDeleteAlertDlgState] = useState(() => ({open: false, item: null}));

  const handleEditDlgOpen = (item) => {
    setEditDlgState(() => ({open: true, item}));
  };

  const handleEditDlgClose = (item) => {
    const oldItem = editDlgState.item;
    const isAdd = !oldItem;

    setEditDlgState(() => ({open: false, item: null}));
    if (item) {
      new Promise((resolve, reject) => {
        if (isAdd) {
          handleRowAdd && handleRowAdd(item);
        } else {
          handleRowUpdate && handleRowUpdate(oldItem, item);
        }
        resolve();
      });
    }
  };

  const handleDeleteAlertDlgOpen = (item) => {
    setDeleteAlertDlgState(() => ({open: true, item}));
  };

  const handleDeleteAlertDlgClose = (confirmed) => {
    const oldItem = deleteAlertDlgState.item;

    setDeleteAlertDlgState(() => ({open: false, item: null}));
    if (confirmed) {
      new Promise((resolve, reject) => {
        handleRowDelete && handleRowDelete(oldItem);
        resolve();
      });
    }
  };

  return (
    <React.Fragment>
      {items.length > 0 && (
        <TableView items={items}
          onOpenEditDlg={handleEditDlgOpen}
          onOpenDeleteAlertDlg={handleDeleteAlertDlgOpen}
        />
      )}
      {items.length === 0 && (
        <EmptyView
          onOpenEditDlg={handleEditDlgOpen}
        />
      )}
      {editDlgState.open && (
        <EditDialog
          open={editDlgState.open}
          item={editDlgState.item}
          handleClose={handleEditDlgClose}
        />
      )}
      {deleteAlertDlgState.open && (
        <DeleteAlertDialog
          open={deleteAlertDlgState.open}
          handleClose={handleDeleteAlertDlgClose}
        />
      )}
      {loading && (
        <LoadingSpinner />
      )}
    </React.Fragment>
  );
}
