import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router';
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
            <Typography sx={{ flexGrow:1 }}>
              <Link to='/'>
                <img src="../../public/PressedExpressionsLogo.png" style={{ marginTop: 5, maxWidth:60 }} />
              </Link>
            </Typography>
          <Button variant="outlined" sx={{
            border: '2x solid #E49999',
            '&:hover': {
              borderColor:'white'
            }          
          }}>
              <Link to='Order'>
              Order
              </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}