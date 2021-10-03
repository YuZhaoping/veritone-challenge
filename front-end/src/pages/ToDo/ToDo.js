import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

import itemsData from './itemsData';
import DemoGrid from './DemoGrid';


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
      <DemoGrid
        tableHeight={400}
        tableWidth={712}
        rowCount={itemsData.rows.length}
        rowGetter={(rowIndex) => itemsData.rows[rowIndex]}
        cellGetter={itemsData.getCellData}
        columns={itemsData.columns}
      />
    </div>
  );
};

export default ToDo;
