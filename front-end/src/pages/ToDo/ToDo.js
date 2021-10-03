import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
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
    padding: theme.spacing(1),
    paddingRight: 0,
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

class MuiVirtualizedTable extends React.PureComponent {
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

const VirtualizedTable = withStyles(styles)(MuiVirtualizedTable);

// ---

const sample = [
  ['Frozen yoghurt', 159, 6.0, 24, 4.0],
  ['Ice cream sandwich', 237, 9.0, 37, 4.3],
  ['Eclair', 262, 16.0, 24, 6.0],
  ['Cupcake', 305, 3.7, 67, 4.3],
  ['Gingerbread', 356, 16.0, 49, 3.9],
];

function createData(id, dessert, calories, fat, carbs, protein) {
  return { id, dessert, calories, fat, carbs, protein };
}

function getCellData(rowData, columnIndex) {
  switch (columnIndex) {
    case 0: return rowData.dessert;
    case 1: return rowData.calories;
    case 2: return rowData.fat;
    case 3: return rowData.carbs;
    case 4: return rowData.protein;
    default: return rowData.id;
  }
}

const rows = [];

for (let i = 0; i < 200; i += 1) {
  const randomSelection = sample[Math.floor(Math.random() * sample.length)];
  rows.push(createData(i, ...randomSelection));
}

// ---

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: 0,
  },
}));


const ToDo = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <VirtualizedTable
        tableHeight={400}
        tableWidth={712}
        rowCount={rows.length}
        rowGetter={(rowIndex) => rows[rowIndex]}
        cellGetter={getCellData}
        columns={[
          {
            width: 200,
            label: 'Dessert',
            dataKey: 'dessert',
          },
          {
            width: 120,
            label: 'Calories\u00A0(g)',
            dataKey: 'calories',
            numeric: true,
          },
          {
            width: 120,
            label: 'Fat\u00A0(g)',
            dataKey: 'fat',
            numeric: true,
          },
          {
            width: 120,
            label: 'Carbs\u00A0(g)',
            dataKey: 'carbs',
            numeric: true,
          },
          {
            width: 120,
            label: 'Protein\u00A0(g)',
            dataKey: 'protein',
            numeric: true,
          },
        ]}
      />
    </div>
  );
};

export default ToDo;
