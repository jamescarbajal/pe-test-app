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
            minHeight: 500,
            maxHeight:'fit-content',
            display:'flex',
            flexDirection:'row',
            flexWrap:'wrap',
            justifyContent:'center',
            alignItems:'start',
            pt:2
        }}>
        {!loaded && (
            <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                height: 400,
                width:400,
                m:2,
                border:'1px solid gray'
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
                    display:'flex',
                    minWidth:300,
                    width:400,
                    maxWidth:700,
                    flexGrow:2,
                    minHeight:300,
                    maxHeight: 700,
                    m:2,
                    borderRadius:2,
                    display: loaded ? 'block' : 'none'
                }}>
            </CardMedia>
            <Box>
                <Paper sx={{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    minWidth:300,
                    maxWidth:300,
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
                    minWidth:300,
                    maxWidth:300,
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