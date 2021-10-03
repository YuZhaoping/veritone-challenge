import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import clsx from 'clsx';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
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
  headerCell: {
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

  cellRenderer = ({ cellData, columnIndex, rowIndex, style }) => {
    const { classes, columns } = this.props;

    const className = (rowIndex % 2 === 0) ? classes.cellEven : classes.cellOdd;

    return (
      <TableCell
        component="div"
        className={clsx(classes.bodyCell, className)}
        variant="body"
        style={style}
        align={(columnIndex != null && columns[columnIndex].numeric) || false ? 'right' : 'left'}
      >
        {cellData}
      </TableCell>
    );
  };

  headerRenderer = ({ label, columnIndex, style }) => {
    const { classes, columns } = this.props;

    return (
      <TableCell
        component="div"
        className={clsx(classes.headerCell, classes.flexContainer)}
        variant="head"
        style={style}
        align={columns[columnIndex].numeric || false ? 'right' : 'left'}
      >
        <span>{label}</span>
      </TableCell>
    );
  };

  render() {
    const {
      classes,
      columns,
      tableHeight, tableWidth,
      headerHeight,
      rowHeight,
      rowCount, rowGetter,
      cellGetter,
      ...other
    } = this.props;

    return (
      <Paper className={classes.root}>
      <TableHead component="div">
        <Grid
          height={headerHeight}
          width={tableWidth}
          columnCount={columns.length}
          columnWidth={index => columns[index].width}
          rowCount={1}
          rowHeight={() => headerHeight}
        >
          {({ columnIndex, rowIndex, style }) => (
            this.headerRenderer({
              label: columns[columnIndex].label,
              columnIndex,
              style,
            })
          )}
        </Grid>
      </TableHead>
      <TableBody component="div">
        <Grid
          height={tableHeight}
          width={tableWidth}
          columnCount={columns.length}
          columnWidth={index => columns[index].width}
          rowCount={rowCount}
          rowHeight={() => rowHeight}
        >
          {({ columnIndex, rowIndex, style }) => (
            this.cellRenderer({
              cellData: cellGetter(rowGetter(rowIndex), columnIndex),
              columnIndex,
              rowIndex,
              style,
            })
          )}
        </Grid>
      </TableBody>
      </Paper>
    );
  }
}

const DemoGrid = withStyles(styles)(MuiDemoGrid);

export default DemoGrid;
