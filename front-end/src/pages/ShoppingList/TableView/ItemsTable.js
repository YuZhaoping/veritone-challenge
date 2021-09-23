import React, { useState, useEffect } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import TablePaginationActions from '../../common/TablePaginationActions';

import ItemRow from './ItemRow';


const useStyles = makeStyles(theme => ({
  container: {
    flexGrow: 1,
  },
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

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const adjustPageNumber = () => {
    let pageNum = page;
    if (page > 0 && rowsPerPage > 0) {
      while ((pageNum * rowsPerPage) >= items.length) {
        --pageNum;
      }
    }
    return pageNum;
  };

  useEffect(() => {
    const pageNum = adjustPageNumber();
    if (pageNum !== page) {
      setPage(pageNum);
    }
  }, [items.length]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const pageNum = adjustPageNumber();

  const classes = useStyles();

  return (
    <TableContainer className={classes.container}>
      <Table size='small'>
        <TableBody>
          {(rowsPerPage > 0
            ? items.slice(pageNum * rowsPerPage, pageNum * rowsPerPage + rowsPerPage)
            : items
          ).map((row, index) => (
            <ItemRow row={row} key={row.itemId} classes={classes}
              onOpenEditDlg={onOpenEditDlg}
              onOpenDeleteAlertDlg={onOpenDeleteAlertDlg}
            />
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 15, { label: 'All', value: -1 }]}
              colSpan={3}
              count={items.length}
              rowsPerPage={rowsPerPage}
              page={pageNum}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
