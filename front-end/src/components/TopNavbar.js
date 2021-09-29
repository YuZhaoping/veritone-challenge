import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import makeStyles from '@material-ui/core/styles/makeStyles';
import withStyles from '@material-ui/core/styles/withStyles';
import clsx from 'clsx';
import Link from '@material-ui/core/Link';

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
  { path: '/', label: 'Home' },
  { path: '/shopping-list', label: 'Shopping list' },
];

const TopNavbar = () => {

  const [pathState, setPathState] = useState({
    current: '/',
  });

  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;

    if (pathname !== pathState.current) {
      setPathState({ current: pathname });
    }
  }, [location]);

  const onClick = (event) => {
    const url = new URL(event.target.href);
    const pathname = url.pathname;

    if (pathname !== pathState.current) {
      setPathState({ current: pathname });
    } else {
      event.preventDefault();
    }
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      {navLinks.map((link) => (
        <StyledLink
          to={link.path}
          active={link.path === pathState.current}
          onClick={onClick}
          key={link.path}
        >{link.label}</StyledLink>
      ))}
    </div>
  );
};

export default TopNavbar;
