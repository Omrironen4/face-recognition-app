import * as React from 'react';
import { Button } from '@mui/material/';
import { Input } from '@mui/material';
import { grey } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import './ImageLinkForm.css'





const theme = createTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: grey[900],
        },
    }
})

export default function ImageLinkForm() {
    return (
        <div style={{ display: 'flex-wrap', padding: '10%' }}>
            <h3>
                {'This magic brain will detect faces in your pictures. Give it a try!'}
            </h3>
            <ThemeProvider theme={theme}>
                <Input sx={{ width: '70vw', paddingRight: '6%', paddingBottom: '1%' }} color='primary' id="standard-basic" label="Insert Photo URL" variant="standard" type='text' />
            </ThemeProvider>
            <Button variant="contained" className='grow'>Detect</Button>
        </div>
    );
}

