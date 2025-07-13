import { Outlet } from 'react-router'
import NavBar from '../components/NavBar';
import Box from '@mui/material/Box';

export default function Layout() {

    return (
    <>
        <Box sx={{ 
            position:'absolute', 
            top: 0, 
            left: 0, 
            backgroundColor: '#E49999', 
            minHeight:'100vh',
            height: 'fit-content', 
            width: '100vw', 
            pt:'5px',
            pl:'3px'
            }}>
            <NavBar/>
            <Outlet/>
        </Box>
    </>
    )
}