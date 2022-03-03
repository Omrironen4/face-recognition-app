import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Logo from '../Logo/Logo'

const Navigation = ({ onRouteChange }) => {
    return (
        <Box>
            <AppBar position="static" sx={{background: 'none', padding:'1%'}}>
                <Toolbar sx={{justifyContent:'space-between'}}>
                    <Logo />
                    <Button onClick={() => onRouteChange('signin')} color="inherit">Sign Out</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navigation;