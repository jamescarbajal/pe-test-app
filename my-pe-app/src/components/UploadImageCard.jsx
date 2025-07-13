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

export default function UploadImage() {


  return (
    <Card variant="solid" sx={{ backgroundColor:'white', maxWidth: 345, maxHeight:'100%' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100px"
          image={lizardImage}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions 
        sx={{
          display:'flex',
          flexDirection:'row',
          alignContent:'center',
          justifyContent:'space-evenly',
          width:'100%',
        }}>
        <Button size="small" variant="contained" color="black">
          Share
        </Button>
        <CropImageModal/>
      </CardActions>
    </Card>
  );
}
