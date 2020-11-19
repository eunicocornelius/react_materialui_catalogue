import React from 'react';
import ControlCameraIcon from '@material-ui/icons/ControlCamera';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  header: {
    flex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography className={classes.header}>This is our header</Typography>
        <ControlCameraIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
