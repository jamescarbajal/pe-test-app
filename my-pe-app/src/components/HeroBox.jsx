import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function HeroBox() {
  return (
    <React.Fragment>
    <CssBaseline/>
        <Box sx={{ position:'absolute', top: 0, left: 0, bgcolor: '#E49999', height: '100vh', width: '100vw' }}/>
    </React.Fragment>
  );
}