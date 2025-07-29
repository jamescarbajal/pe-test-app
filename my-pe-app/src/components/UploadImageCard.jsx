import * as React from 'react';
import Card from '@mui/material/Card';
import { useState, useEffect } from 'react';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CropImageModal from './cropImageModal';
import lizardImage from '../assets/images/iguanas-on-rocks-stockcake.jpg';
import placeHolderImage from '../assets/images/placeholder600x600.png';

export default function UploadImageCard() {

  const [ uploadedImage, setUploadedImage ] = useState('');
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
          alt="green iguana"
          sx={{
            width:200,
            height:200,
            borderRadius:'50%',
            m:0
          }}
        />
          Click to edit      
    </Card>
    </>
  );
}
