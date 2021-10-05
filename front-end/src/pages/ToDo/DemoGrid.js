import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import clsx from 'clsx';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { VariableSizeGrid as Grid } from 'react-window';

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
  bodyCell: {
  },
  cellOdd: {
    backgroundColor: theme.palette.action.hover,
  },
  cellEven: {
  },
});

class MuiDemoGrid extends React.PureComponent {
  static defaultProps = {
    headerHeight: 48,
    rowHeight: 48,
  };

  cellRenderer = ({ columnIndex, rowIndex, style }) => {
    const { classes, columns, rowGetter, cellGetter } = this.props;

    const className = (rowIndex % 2 === 0) ? classes.cellEven : classes.cellOdd;

    return (
      <TableCell
        component='div'
        className={clsx(classes.bodyCell, className)}
        variant='body'
        style={style}
        align={columns[columnIndex].numeric || false ? 'right' : 'left'}
      >
        {cellGetter(rowGetter(rowIndex), columnIndex)}
      </TableCell>
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

    return (
      <Paper className={classes.root}>
      <TableHead component='div'>
        {this.headerRenderer({
          rowWidth,
          headerHeight,
        })}
      </TableHead>
      <TableBody component='div'>
        <Grid
          height={tableHeight}
          width={tableWidth}
          columnCount={columns.length}
          columnWidth={index => columns[index].width}
          rowCount={rowCount}
          rowHeight={() => rowHeight}
        >
          {this.cellRenderer}
        </Grid>
      </TableBody>
      </Paper>
    );
  }
}

const DemoGrid = withStyles(styles)(MuiDemoGrid);

export default DemoGrid;
