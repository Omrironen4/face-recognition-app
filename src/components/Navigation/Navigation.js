import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Logo from '../Logo/Logo'



const theme = createTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: grey[900],
        },
    }
})


const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
        return (
            <Box>
                <AppBar position="static" sx={{ background: 'none', padding: '1%' }}>
                    <Toolbar sx={{ justifyContent: 'space-between' }}>
                        <Logo />
                        <Button onClick={() => onRouteChange('signin')} color="primary">Sign Out</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        );
    } else {
        return (
            <Box>
                <AppBar position="static" sx={{ background: 'none', padding: '1%' }}>
                    <Toolbar sx={{  }}>
                        <Logo />
                        <ThemeProvider theme={theme}>
                        <Button onClick={() => onRouteChange('signin')} color="primary" sx={{marginLeft: 'auto'}}>Sign In</Button>
                        <Button onClick={() => onRouteChange('register')} color="primary">Register</Button>
                        </ThemeProvider>
                    </Toolbar>
                </AppBar>
            </Box>
        );
    }

}

export default Navigation;