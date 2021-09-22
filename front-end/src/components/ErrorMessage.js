import React from 'react';
import { connect } from 'react-redux';
import makeStyles from '@material-ui/core/styles/makeStyles';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import { removeErrorAction } from '../actions/errorsAction';


const useStyles = makeStyles(theme => ({
  snackbar: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 2,
    backgroundColor: theme.palette.error.light,
    color: theme.palette.error.contrastText,
    marginTop: '2px',
    marginRight: '2px',
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
  messageText: {
    flexGrow: 1,
    marginLeft: theme.spacing(2),
  },
}));

const MessageBar = (props) => {
  const { message, onClose } = props;

  const classes = useStyles();

  return (
    <SnackbarContent
      className={ classes.snackbar }
      aria-describedby="error-message-bar"
      message={
        <div id="error-message-bar" className={ classes.message }>
          <span className="material-icons-outlined md-18">report_problem</span>
          <Typography className={ classes.messageText } variant="subtitle1">
            { message }
          </Typography>
        </div>
      }
      action={[
        <IconButton key="close" color="inherit" onClick={ onClose }>
          <span className="material-icons-outlined md-18">close</span>
        </IconButton>,
      ]}
    />
  );
};

const ErrorMessage = (props) => {
  const { error, removeError } = props;

  const onClose = () => {
    error && removeError(error);
  }

  return (
    <React.Fragment>
      { error && (
        <MessageBar
          message={ error.toString() }
          onClose={ onClose }
        />
      ) }
    </React.Fragment>
  );
};

const mapStateToProps = ({ errorsProfile }) => {
  return { error: errorsProfile.currentError };
};

const mapDispatchToProps = (dispatch) => ({
  removeError: (error) => dispatch(removeErrorAction(error)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorMessage);
