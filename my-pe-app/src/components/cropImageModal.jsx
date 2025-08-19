import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import CancelIcon from '@mui/icons-material/Cancel';
import CircleCrop from './CircleCrop.jsx';



const style = {
    zIndex:1000,
    position: 'relative',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'space-between',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width:'fit-content',
    maxWidth:'90%',
    height:550,
    maxHeight:'70%',
    border: '2px solid #000',
    borderRadius: 5,
    boxShadow: 12,
    p:2,
    backgroundColor:'#E49999'
};

export default function CropImageModal( {imageIndex} ){

    const [isOpen, setOpen] = useState(false);
    const [workingImages, setWorkingImages] = useState([]);

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
      setOpen(false);
    }

    const previewImage = (e) => {
      if (!workingImages) {
        setWorkingImages(JSON.parse(sessionStorage.getItem('croppedImages')));
        return workingImages[e].data_url;
      }
      else {
        const sessionImages = JSON.parse(sessionStorage.getItem('sessionImages'));
        return sessionImages[e].data_url;
      }
    }


    return (
  <>
      <Button onClick={handleOpen} 
      sx={{
        width:200
       }}>
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
          image={previewImage(imageIndex)}
          alt="uploaded image"
          sx={{
            width:200,
            height:200,
            borderRadius:'50%',
            border: '2px solid black',
            m:0,
            boxShadow: 5
          }}
        />
          <p>This is image {imageIndex +1}</p>
    </Card>
      </Button>
        <Modal
          open={isOpen}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Box sx={{
                position:'relative',
                top:0,
                left:'47%',
                m:0,
                p:0
              }}>
              <Button onClick={handleClose} sx={{
                color:'black'
              }}>
                <CancelIcon fontSize='large'/>
              </Button>
            </Box>
            <Box sx={{
              minHeight: 400,
              maxHeight:'80%',
              width:'100%',
              }}>
              <CircleCrop imageIndex={imageIndex} />
            </Box>
            <Box sx={{
              display:'flex',
              flexDirection:'row',
              justifyContent:'center',
              alignItems:'center',
              width:'100%'
            }}>
            </Box>
              <Box sx={{
                width: '100%',
                maxWidth: 500,
                height: 50,
                display: 'flex',
                justifyContent:'space-evenly'
              }}>
                <button style={{ width:100 }}>Reset</button>
                <button style={{ width:100 }}>Crop</button>
              </Box>
          </Box>
        </Modal>
  </>

    )
}