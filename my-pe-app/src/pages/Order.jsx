import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import productKeychains from '../assets/images/keychain-example.jpg';
import productPinbacks from '../assets/images/pinback-example.jpg';
import productMagnets from '../assets/images/magnet-example.jpg';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import ProductSelectForm from '../components/productSelectForm';



export default function Order() {
    
    const sessionOrderOptions = JSON.parse(sessionStorage.getItem('orderOptions'));

    const [ imageSrc, setImageSource ] = useState(productMagnets);

    const handleRadioSelect = (value) => {
        if (value == "productMagnets"){ setImageSource(productMagnets) };
        if (value == "productKeychains"){ setImageSource(productKeychains) };
        if (value == "productPinbacks"){ setImageSource(productPinbacks) };
    };

    const [loaded, setLoaded] = useState(false);
    const handleImageLoad = () => {
        setLoaded(true);
    };

    return (
    <>
        <Box sx={{
            position:'relative',
            width:'100%',
            maxWidth:'100vw',
            height:'91vh',
            display:'flex',
            flexDirection:'row',
            flexWrap:'wrap',
            justifyContent:'center',
            alignItems:'start'
            }}>
            <Box 
                sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    width:500,
                    m:2,
                }}>
                {!loaded && (
                    <Box>
                        <CircularProgress color="secondary"/>
                    </Box>
                )}
                    <CardMedia
                        component="img"
                        image={imageSrc}
                        onLoad={handleImageLoad}
                        sx={{ 
                            borderRadius:2,
                            display: loaded ? 'block' : 'none'
                        }}>
                    </CardMedia>
                </Box>
                <Box>
                    <Paper sx={{
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        width:300,
                        minHeight:250,
                        height:'100%',
                        m:2
                    }}>
                        <ProductSelectForm onRadioChange={handleRadioSelect}/>
                    </Paper>
                </Box>
        </Box>
    </>
    )
}