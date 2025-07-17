import { styled } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import RadioButtons from '../components/RadioButtons';
import keychainImage from '../assets/images/keychain-example.jpg';
import pinbackImage from '../assets/images/pinback-example.jpg';
import magnetImage from '../assets/images/magnet-example.jpg';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import QuantitySelect from '../components/QuantitySelect';



export default function Order() {
    
    const [ imageSrc, setImageSource ] = useState(magnetImage);
    const handleRadioSelect = (value) => {
        console.log('Child data is ' + value);
        if (value == "productMagnets"){ setImageSource(magnetImage) };
        if (value == "productKeychains"){ setImageSource(keychainImage) };
        if (value == "productPinbacks"){ setImageSource(pinbackImage) };
    };

    const [loaded, setLoaded] = useState(false);
    const handleImageLoad = () => {
        setLoaded(true);
    };

        useEffect( () => {;
            console.log('Image is ' + imageSrc);
    }, [imageSrc] );

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
                        maxHeight:500,
                        m:2
                    }}>
                        <RadioButtons onRadioChange={handleRadioSelect}/>
                    </Paper>
                    <Paper sx={{
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        width:300,
                        minHeight:125,
                        maxHeight:'fit-content',
                        m:2
                    }}>
                        <QuantitySelect/>
                    </Paper>
                    </Box>
        </Box>
    </>
    )
}