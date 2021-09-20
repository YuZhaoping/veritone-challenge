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

  const [openEditDlg, setOpenEditDlg] = useState(false);

  const handleEditDlgOpen = (item) => {
    setOpenEditDlg(true);
  };

  const handleEditDlgClose = (item) => {
    setOpenEditDlg(false);
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
      {openEditDlg && (
        <EditDialog
          open={openEditDlg}
          handleClose={handleEditDlgClose}
        />
      )}
    </React.Fragment>
  );
}
