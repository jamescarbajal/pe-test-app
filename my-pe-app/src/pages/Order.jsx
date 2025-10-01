import { useState, useEffect, useContext } from 'react';
import { storeImages, getImages } from '../utils/idb-keyval';
import Paper from '@mui/material/Paper';
import productKeychains from '../assets/images/keychain-example.jpg';
import productPinbacks from '../assets/images/pinback-example.jpg';
import productMagnets from '../assets/images/magnet-example.jpg';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import ProductSelectForm from '../components/productSelectForm';


export default function Order() {

    const pulledOrderDetails = sessionStorage.getItem('orderDetails')

    const checkOrderDetails = (data) => {
        if (data == null || data == undefined) {
            const createObject = {
                Type: 'productMagnets',
                Quantity: '',
            }
            return createObject;
        } else return JSON.parse(data);
    };

    sessionStorage.setItem('orderDetails', JSON.stringify(checkOrderDetails(pulledOrderDetails)));

    const [exampleImage, setExampleImage] = useState('')
    const [loaded, setLoaded] = useState(false);
    
    const handleImageLoad = () => {
        setLoaded(true);
    };

    const checkType = (data) => {
        if (data) {
            if (data == 'productMagnets') {
                setExampleImage(productMagnets);
            }
            if (data == 'productKeychains') {
                setExampleImage(productKeychains);
            }
            if (data == 'productPinbacks') {
                setExampleImage(productPinbacks);
            }
        } else setExampleImage(productMagnets);
    }

    useEffect( () => {

        checkType(JSON.parse(sessionStorage.getItem('orderDetails')).Type);

    }, [exampleImage, pulledOrderDetails]);

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
                        image={exampleImage}
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
                        <ProductSelectForm onRadioChange={checkType}/>
                    </Paper>
                </Box>
        </Box>
    </>
    )
}