import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router';
import Button from '@mui/material/Button';


export default function NavBar() {
  return (
    <Box sx={{ 
        width: '100vw'
      }}>
      <AppBar position="relative" zindex="10" sx={{ 
        width:'100%',
        backgroundColor:'#000000' 
        }}>
        <Toolbar sx={{ 
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor:'#000000'
         }}>
            <Typography>
              <Link to='/'>
                <img src="/PressedExpressionsLogo.png" style={{ marginTop: 5, maxWidth:60 }} />
              </Link>
            </Typography>
          <Link to='/Order'>
          <Button sx={{
            color:'#E49999',
            border:2,
            borderColor: '#E49999',
            '&:hover': {
              color:'white',
              backgroundColor:'#E49999',
              borderColor:'white'
            }          
          }}>
              Order
          </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}