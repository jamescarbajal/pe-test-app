import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CropImageModal from './cropImageModal';
import lizardImage from '../assets/images/iguanas-on-rocks-stockcake.jpg';

export default function UploadImageCard() {


  return (
    <>
    <Card variant="solid" sx={{ 
        position:'relative',
        backgroundColor:'white', 
        minWidth:'fit-content',
        display:'flex',
        flexDirection:'column',
        alignContent:'center',
        justifyContent:'space-between',
        height:'100%',
        maxHeight:250
      }}>
      <CardActionArea sx={{
        height:'fit-content',
        width:'fit-content',
        m:'auto'
      }}>
        <CardMedia
          component="img"
          image={lizardImage}
          alt="green iguana"
          sx={{
            width:200,
            height:200,
            borderRadius:'50%',
            m:0
          }}
        />
      </CardActionArea>
      <CardActions 
        sx={{
          display:'flex',
          justifyContent:'space-between',
          height:'fit-content'
        }}>
        <Button 
        component="label"
        size="small" 
        variant="outlined" 
        style={{
          display:'flex',
          color:'black',
          fontWeight:'bold',
          border:'2px solid black'
        }}>
          <FileUploadOutlinedIcon/>
        <input hidden type="file" accept="image/*"/>
        </Button>
        <CropImageModal/>
      </CardActions>
    </Card>
    </>
  );
}
