import React, { useState } from 'react';

import EmptyView from './EmptyView';
import TableView from './TableView';

export default function ViewEntry(props) {
  const {
    items,
    handleRowAdd,
    handleRowUpdate,
    handleRowDelete
  } = props

  return (
    <React.Fragment>
      {items.length > 0 && (
        <TableView items={items} onRowAdd={handleRowAdd} />
      )}
      {items.length === 0 && (
        <EmptyView onRowAdd={handleRowAdd} />
      )}
    </React.Fragment>
  );
}
