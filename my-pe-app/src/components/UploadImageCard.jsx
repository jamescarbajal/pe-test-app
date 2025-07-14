import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
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
        width:225,
        display:'flex',
        flexDirection:'column',
        alignContent:'center',
        justifyContent:'space-between',
        height:'100%',
      }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="175px"
          image={lizardImage}
          alt="green iguana"
        />
      </CardActionArea>
      <CardActions 
        sx={{
          display:'flex',
          justifyContent:'space-between',
          height:'fit-content',
          mt:2
        }}>
        <Button size="medium" variant="outlined" 
        style={{
          color:'black',
          fontWeight:'bold',
          border:'2px solid black'
        }}>
          Upload
        </Button>
        <CropImageModal/>
      </CardActions>
    </Card>
    </>
  );
}
