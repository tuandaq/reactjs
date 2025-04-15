import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

Header.propTypes = {};

function Header(props) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="primary" elevation={2}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <NavLink
                        to="/contact"
                        style={{
                            textDecoration: 'none',
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: '1.25rem',
                            flexGrow: 1
                        }}
                    >
                        Menu
                    </NavLink>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;
