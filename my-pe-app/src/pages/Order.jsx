import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import keychainImage from '../assets/images/keychain-example.jpg';
import pinbackImage from '../assets/images/pinback-example.jpg';
import magnetImage from '../assets/images/magnet-example.jpg';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import ProductSelectForm from '../components/productSelectForm';



export default function Order() {
    
    const [ imageSrc, setImageSource ] = useState(magnetImage);
    const handleRadioSelect = (value) => {
        if (value == "productMagnets"){ setImageSource(magnetImage) };
        if (value == "productKeychains"){ setImageSource(keychainImage) };
        if (value == "productPinbacks"){ setImageSource(pinbackImage) };
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
            alignItems:'start',
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
                    <Box sx={{
                        border:'2px solid black'
                        }}>
                        <CircularProgress color="secondary"
                        />
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