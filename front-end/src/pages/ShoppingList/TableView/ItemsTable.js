import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';

import ItemRow from './ItemRow';

const useStyles = makeStyles(theme => ({
  itemName: {
    textDecoration: 'none',
  },
  itemNameLineThrough: {
    textDecoration: 'line-through',
    color: theme.palette.primary.main,
  },
  itemDesc: {
    textDecoration: 'none',
  },
  itemDescLineThrough: {
    textDecoration: 'line-through',
  },
}));

export default function ItemsTable(props) {
  const { items, onOpenEditDlg, onOpenDeleteAlertDlg } = props;

  const classes = useStyles();

  return (
    <TableContainer>
      <Table>
        <TableBody>
          {items.map((row, index) => (
            <ItemRow row={row} key={row.itemId} classes={classes}
              onOpenEditDlg={onOpenEditDlg}
              onOpenDeleteAlertDlg={onOpenDeleteAlertDlg}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
