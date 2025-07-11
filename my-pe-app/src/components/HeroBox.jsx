import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function HeroBox() {
  return (
    <React.Fragment>
    <CssBaseline/>
        <Box sx={{ position:'absolute', top: 0, left: 0, backgroundColor: '#E49999', height: '100%', width: '100%', zIndex:'0'}}/>
    </React.Fragment>
  );
}