import React, { useState } from 'react';

import EmptyView from './EmptyView';
import TableView from './TableView';
import EditDialog from './EditDialog';

export default function ViewEntry(props) {
  const {
    items,
    handleRowAdd,
    handleRowUpdate,
    handleRowDelete
  } = props

  const [editDlgState, setEditDlgState] = useState(() => ({open: false, item: null}));

  const handleEditDlgOpen = (item) => {
    setEditDlgState(() => ({open: true, item}));
  };

  const handleEditDlgClose = (item) => {
    setEditDlgState(() => ({open: false, item: null}));
    if (item) {
      new Promise((resolve, reject) => {
        handleRowAdd && handleRowAdd(item);
        resolve();
      });
    }
  };

  return (
    <React.Fragment>
      {items.length > 0 && (
        <TableView items={items}
          onOpenEditDlg={handleEditDlgOpen}
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
    </React.Fragment>
  );
}
