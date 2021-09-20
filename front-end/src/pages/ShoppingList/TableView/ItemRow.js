import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

export default function ItemRow(props) {
  const { row, onOpenEditDlg, onOpenDeleteAlertDlg } = props;

  const handleEditDlgOpen = () => {
    onOpenEditDlg && onOpenEditDlg(row);
  };

  const handleDeleteAlertDlgOpen = () => {
    onOpenDeleteAlertDlg && onOpenDeleteAlertDlg(row);
  };

  return (
    <TableRow
      hover
      key={row.itemId}
    >
      <TableCell padding="checkbox">
        <Checkbox
          checked={false}
        />
      </TableCell>
      <TableCell component="th" scope="row" padding="none">
        <Typography variant="subtitle1">{row.itemName}</Typography>
        <Typography color="textSecondary">{row.itemDesc}</Typography>
      </TableCell>
      <TableCell align="right">
        <IconButton aria-label="edit" onClick={handleEditDlgOpen} >
          <span className="material-icons-outlined md-18">mode_edit</span>
        </IconButton>
        <IconButton aria-label="delete" onClick={handleDeleteAlertDlgOpen} >
          <span className="material-icons-outlined md-18">delete</span>
        </IconButton>
      </TableCell>
    </TableRow>
  );
}
