import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function HeroBox() {
  return (
    <React.Fragment>
    <CssBaseline/>
        <Box sx={{zIndex:"-1", bgcolor: '#cfe8fc', height: '100vh'}}/>
    </React.Fragment>
  );
}
