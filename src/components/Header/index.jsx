import { Box, Container, Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

Header.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.element,
  onClick: PropTypes.func,
  id: PropTypes.string,
};

Header.defaultProps = {
  title: '',
  icon: null,
  onClick: null,
  id: '',
};

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  title: {
    cursor: 'pointer',
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const { title, icon, onClick, id } = props;

  const handleClick = () => {
    if (onClick) {
      id ? onClick(id) : onClick();
    }
  };

  return (
    <div className={classes.grow}>
      <AppBar position="static" color="inherit">
        <Container>
          <Toolbar style={{ padding: 0 }}>
            <Box className={classes.grow}>
              <Link to="/home">
                <img
                  src="https://food-blog-minhung-hung-le.vercel.app/images/logo.svg"
                  alt="logo"
                  title="logo"
                />
              </Link>
            </Box>

            <Typography
              variant="body1"
              onClick={handleClick}
              color="secondary"
              className={classes.title}
            >
              <span>
                {icon} {title}
              </span>
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
