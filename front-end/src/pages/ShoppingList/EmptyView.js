import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 560,
    marginTop: 64,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 320,
    height: 256,
    margin: '0 auto',
  },
  title: {
    marginBottom: 16,
    fontSize: 16,
  },
});

const EmptyView = (props) => {
  const { onOpenEditDlg } = props;

  const handleEditDlgOpen = () => {
    onOpenEditDlg && onOpenEditDlg();
  };

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
      <Typography className={classes.title}>
        {'Your shopping list is empty :('}
      </Typography>
      <Button variant="contained" color="primary" onClick={handleEditDlgOpen}>
        {'Add your first item'}
      </Button>
      </CardContent>
    </Card>
  );
};

export default EmptyView;
