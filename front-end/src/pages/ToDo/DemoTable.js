import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import clsx from 'clsx';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { FixedSizeList as List } from 'react-window';

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(1, 0),
  },
  flexContainer: {
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
  },
  headerRow: {
  },
  headerCell: {
    padding: 12,
  },
  bodyRow: {
  },
  bodyCell: {
    padding: 14,
  },
});

class MuiDemoTable extends React.PureComponent {
  static defaultProps = {
    headerHeight: 48,
    rowHeight: 48,
  };

  cellRenderer = ({ columnIndex, rowIndex, key }) => {
    const { classes, columns, rowGetter, cellGetter } = this.props;

    return (
      <TableCell
        component='div'
        className={classes.bodyCell}
        variant='body'
        style={{ width: columns[columnIndex].width }}
        align={columns[columnIndex].numeric || false ? 'right' : 'left'}
        key={key}
      >
        {cellGetter(rowGetter(rowIndex), columnIndex)}
      </TableCell>
    );
  };

  rowRenderer = ({ index: rowIndex, style, rowWidth }) => {
    const { classes, columns } = this.props;

    return (
      <TableRow
        className={classes.bodyRow}
        hover
        component='div'
        style={{
          ...style,
          width: rowWidth,
        }}
      >
        {columns.map((col, columnIndex) => (
          this.cellRenderer({
            columnIndex,
            rowIndex,
            key: col.dataKey,
          })
        ))}
      </TableRow>
    );
  };

  headerCellRenderer = ({ columnIndex, key }) => {
    const { classes, columns } = this.props;

    return (
      <TableCell
        component='div'
        className={classes.headerCell}
        variant='head'
        style={{ width: columns[columnIndex].width }}
        align={columns[columnIndex].numeric || false ? 'right' : 'left'}
        key={key}
      >
        <span>{columns[columnIndex].label}</span>
      </TableCell>
    );
  };

  headerRenderer = ({ rowWidth, headerHeight }) => {
    const { classes, columns } = this.props;

    return (
      <TableRow
        component='div'
        className={clsx(classes.headerRow, classes.flexContainer)}
        style={{
          width: rowWidth,
          height: headerHeight,
        }}
      >
        {columns.map((col, columnIndex) => (
          this.headerCellRenderer({
            columnIndex,
            key: col.dataKey,
          })
        ))}
      </TableRow>
    );
  };

  render() {
    const {
      classes,
      columns,
      tableHeight, tableWidth,
      headerHeight,
      rowHeight,
      rowCount,
    } = this.props;

    const rowWidth = columns.reduce((total, col) => (total + col.width), 0);
    // TODO: adjust rowWidth and tableWidth

    return (
      <Paper className={classes.root}>
        <TableHead component='div'>
          {this.headerRenderer({
            rowWidth,
            headerHeight,
          })}
        </TableHead>
        <TableBody component='div'>
          <List
            height={tableHeight}
            width={tableWidth}
            itemCount={rowCount}
            itemSize={rowHeight}
          >
            {({index, style}) => this.rowRenderer({
              index,
              style,
              rowWidth,
            })}
          </List>
        </TableBody>
      </Paper>
    );
  }
}

const DemoTable = withStyles(styles)(MuiDemoTable);

export default DemoTable;
