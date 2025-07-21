import { Outlet } from 'react-router'
import { ReactRouterAppProvider } from '@toolpad/core/react-router';
import { createTheme } from '@mui/material/styles';
import NavBar from '../components/NavBar';
import Box from '@mui/material/Box';


export default function Layout() {

    const lightTheme = createTheme({
        palette:{
            mode:'light'
        }
    })


    return (
    <>
        <ReactRouterAppProvider 
            theme={lightTheme}
        >
            <Box sx={{ 
                position:'absolute', 
                top:0,
                left:0,
                minHeight:'100vh',
                height: 'fit-content', 
                maxWidth: '100vw',
                backgroundColor:'#E49999'
                }}>
                <NavBar/>
                <Outlet/>
            </Box>
        </ReactRouterAppProvider>
    </>
    )
}