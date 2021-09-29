import React, { useState, useEffect } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import withStyles from '@material-ui/core/styles/withStyles';
import clsx from 'clsx';
import Link from '@material-ui/core/Link';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

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

const TopNavbar = (props) => {
  const { pathname } = props;

  const [pathState, setPathState] = useState({
    current: pathname,
  });

  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== pathState.current) {
      setPathState({ current: location.pathname });
    }
  }, [location]);

  const onClick = (event) => {
    const url = new URL(event.target.href);

    if (url.pathname !== pathState.current) {
      setPathState({ current: url.pathname });
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
        >
          {link.label}
        </StyledLink>
      ))}
    </div>
  );
};

const mapStateToProps = ({ router }) => ({
  pathname: router.location.pathname,
});

export default connect(mapStateToProps, {
})(TopNavbar);
