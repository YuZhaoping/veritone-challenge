import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import withStyles from '@material-ui/core/styles/withStyles';
import clsx from 'clsx';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';

const linkStyles = (theme) => ({
  root: {
    display: 'block',
    textAlign: 'center',
    fontSize: theme.typography.pxToRem(17),
    padding: '14px 16px',
    '&:hover:not($active)': {
      backgroundColor: theme.palette.grey[300],
    },
    '&$active': {
      color: theme.palette.primary.main,
    },
  },
  active: {},
});

const StyledLink = withStyles(linkStyles)(({ classes, className, active, ...other }) => (
  <Link
    component={RouterLink}
    active={active}
    className={clsx(
      classes.root,
      {
        [classes.active]: active,
      },
      className,
    )}
    color="inherit"
    underline="none"
    {...other}
  />
));

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.grey[200],
    color: theme.palette.text.primary,
    minHeight: 48,
    padding: theme.spacing(0, 2),
    overflow: 'hidden',
  },
}));

const navLinks = [
  { id: 'home', path: '/', label: 'Home'},
  { id: 'shopping-list', path: '/shopping-list', label: 'Shopping list'},
];

const TopNavbar = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      {navLinks.map((el) => (
        <StyledLink key={el.id} to={el.path}>{el.label}</StyledLink>
      ))}
    </div>
  );
};

export default TopNavbar;
