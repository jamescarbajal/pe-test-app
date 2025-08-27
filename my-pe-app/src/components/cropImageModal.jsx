import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import CancelIcon from '@mui/icons-material/Cancel';
import CircleCrop from './CircleCrop.jsx';
import getCroppedImg from './ImageOutput.jsx';
import { ImagesContext } from '../contexts/ImagesContext.jsx';



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
    const [recievedAreaData, setReceivedAreaData] = useState(null);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const previewImage = (e) => {
        const workingImages = JSON.parse(sessionStorage.getItem('workingImages'));
        return workingImages[e].data_url;
    }

    const resetImage = () => {
      const originalImages = JSON.parse(sessionStorage.getItem('sessionImages'));
      console.log('originalImageIndex: ', originalImages[imageIndex]);
      const oldImageList = JSON.parse(sessionStorage.getItem('workingImages'));
      const newImageList = oldImageList.map((item, index) => {
        if (index === imageIndex) {
          console.log('Replacing image ', item);
          return originalImages[imageIndex];
        } else return item;
      })
      sessionStorage.setItem('workingImages', JSON.stringify(newImageList));
      setOpen(false);
    };

    const getCroppedArea = (data) => {
      setReceivedAreaData(data);
    }

    const cropComplete = async () => {
      const sessionImages = JSON.parse(sessionStorage.getItem('sessionImages'));
      const currentImage = sessionImages[imageIndex].data_url;
      console.log('receivedAreaData: ', recievedAreaData);
      try {
        const croppedImage = await getCroppedImg(
          currentImage,
          recievedAreaData
        )
        console.log('cropComplete', { croppedImage })
        const workingImages = JSON.parse(sessionStorage.getItem('workingImages'));
        const updateWorkingImages = workingImages.map((item, index) => {
          if (index === imageIndex) {
            return { data_url: croppedImage };
          } else return item;
        })
        sessionStorage.setItem('workingImages', JSON.stringify(updateWorkingImages));      
      } catch (e) {
      console.error(e)
      }
      setOpen(false);
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
              <CircleCrop imageIndex={imageIndex} getCroppedArea={getCroppedArea} />
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
                <button 
                style={{ width:100 }}
                onClick={resetImage}
                >
                  Reset
                  </button>
                <button 
                  style={{ width:100 }}
                  onClick={cropComplete}
                >
                  Crop
                  </button>
              </Box>
          </Box>
        </Modal>
  </>

    )
}