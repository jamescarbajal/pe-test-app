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


export default function Order() {
    
    const [ imageSrc, setImageSource ] = useState(magnetImage);

    const handleRadioSelect = (data) => {
        if (data = "productMagnets"){ setImageSource(magnetImage) };
        if (data = "productKeychains"){ setImageSource(keychainImage) };
        if (data = "productPinbacks"){ setImageSource(pinbackImage) };
    };


    //     useEffect( () => {;
    //         console.log(imageSrc);
    // }, [imageSrc] );

    return (
    <>
        <Container sx={{
            width:'100vw',
            height:'100%',
            display:'flex',
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            p:5
        }}>
            <CardMedia
                component="img"
                image={imageSrc}
                sx={{ 
                    flexGrow:1,
                    maxHeight: 400
                }}>
            </CardMedia>
            <Paper sx={{
                minWidth:300,
                height:400,
                p:4,
                m:0
            }}>
                <RadioButtons radioValue={handleRadioSelect}/>
            </Paper>
        </Container>
    </>
    )
}