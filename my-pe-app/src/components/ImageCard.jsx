import * as React from 'react';
import Card from '@mui/material/Card';
import { useState, useEffect } from 'react';
import CardMedia from '@mui/material/CardMedia';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import placeHolderImage from '../assets/images/P-Rex Logo.png';

export default function ImageCard( {imageIndex} ) {

  const imageArray = JSON.parse(sessionStorage.getItem('sessionImages'));


  const [ uploadedImage, setUploadedImage ] = useState('placeHolderImage');
  // const handleUploadedImage = () => {

  // }

  return (
    <>
    <Card variant="solid" sx={{ 
        position:'relative',
        backgroundColor:'rgb(0,0,0,0)', 
        minWidth:'fit-content',
        display:'flex',
        flexDirection:'column',
        alignContent:'center',
        justifyContent:'space-between',
        height:'100%',
        maxHeight:250
      }}>
        <CardMedia
          component="img"
          image={placeHolderImage}
          alt="placeholder image"
          sx={{
            width:200,
            height:200,
            borderRadius:'50%',
            border: '2px solid black',
            m:0,
            boxShadow: 5
          }}
        />
          <p>This is image {imageIndex}</p>
    </Card>
    </>
  );
}
