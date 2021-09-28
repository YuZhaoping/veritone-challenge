import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  cardRow1: {
    display: 'flex',
    minWidth: 320,
    minHeight: 240,
  },
  cardRow2: {
    display: 'flex',
    minWidth: 480,
    minHeight: 360,
  },
  cardContent: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const Dashboard = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Card className={classes.cardRow1}>
            <CardContent className={classes.cardContent}>
              <Typography>Card-1-1</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs>
          <Card className={classes.cardRow1}>
            <CardContent className={classes.cardContent}>
              <Typography>Card-1-2</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs>
          <Card className={classes.cardRow1}>
            <CardContent className={classes.cardContent}>
              <Typography>Card-1-3</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <Card className={classes.cardRow2}>
            <CardContent className={classes.cardContent}>
              <Typography>Card-2-1</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs>
          <Card className={classes.cardRow2}>
            <CardContent className={classes.cardContent}>
              <Typography>Card-2-2</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
