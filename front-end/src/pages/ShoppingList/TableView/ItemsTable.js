import React from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';

import ItemRow from './ItemRow';

export default function ItemsTable(props) {
  const { items, onOpenEditDlg } = props;

  return (
    <TableContainer>
      <Table>
        <TableBody>
          {items.map((row, index) => (
            <ItemRow row={row} key={row.itemId}
              onOpenEditDlg={onOpenEditDlg}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
