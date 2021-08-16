import React, { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
//import ButtonGroup from '@material-ui/core/ButtonGroup';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    textAlign: 'left',
    color: 'inherit',
    textDecoration: 'none',
  },
}));

const Header: FC = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h5"
          className={classes.title}
          component={RouterLink}
          to="/"
        >
          Kalamos Care
        </Typography>
        {/*
        <ButtonGroup color="inherit">
          <Button component={RouterLink} to="/login">
            Login
          </Button>
          <Button component={RouterLink} to="/signup">
            Sign Up
          </Button>
        </ButtonGroup>
        */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
