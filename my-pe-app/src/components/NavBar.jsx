import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="absolute" zindex="10" sx={{ backgroundColor:'#000000' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="#000000"
            aria-label="menu"
            sx={{ 
              border: '2ps solid transparent',
              mr: 2, 
              backgroundColor:'#E49999',
              '&:hover': {
                backgroundColor: '#E49999',
                color: '#FFFFFF'
              }
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button sx= {{ color:'#E49999' }}>
              Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}