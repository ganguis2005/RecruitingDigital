import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function FloatingActionButtons(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab onClick={props.prevStep} color="secondary" aria-label="edit">
        <ArrowBackIcon />
      </Fab>
    </div>
  );
}
