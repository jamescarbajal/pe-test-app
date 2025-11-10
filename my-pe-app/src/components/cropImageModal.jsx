import { useContext, useEffect, useState } from 'react';
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

export default function CropImageModal( {imageIndex, dataURL, cropData } ){

    const { originalImages, setOriginalImages, imageData, setImageData, croppedImages, setCroppedImages, cropReset, setCropReset } = useContext(ImagesContext);

    const [isOpen, setOpen] = useState(false);
    const [recievedAreaData, setReceivedAreaData] = useState(null);
    const [receivedZoomData, setReceivedZoomData] = useState(null);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    const [preview, setPreview] = useState('');

    const previewURL = async (index) => {
      const url = originalImages[index].data_url;
      let pixel = null;
      if(imageData && imageData[index]){
        pixel = imageData[index].pixelArea
        }
      const newImage = await getCroppedImg(url, pixel);
      setPreview(newImage);
    }
    
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const getCroppedArea = (data) => {
      setReceivedAreaData(data);
    }

    const getPixels = async (data) => {
      setCroppedAreaPixels(data);
    }

    const getZoomInfo = (data) => {
      setReceivedZoomData(data);
    }

    const cropComplete = (data) => {
      const updatedImages = originalImages.map((obj, index) => {
        if (index === data) {
          return {
            ...obj,
            data_url: obj.data_url,
            }
          };
        return obj;
      });
      setOriginalImages(updatedImages);
      const updatedImageData = imageData.map((obj, index) => {
        if (index === data) {
          return {
            ...obj,
            cropData: recievedAreaData,
            zoomData: receivedZoomData,
            pixelArea: croppedAreaPixels
            }
          };
        return obj;
      });
      setImageData(updatedImageData);
      handleClose();
    }

    const resetCrop = async (data) => {
      const newArray = imageData.map((item, index) => {
        if (index === data) {
          item.cropData = {
            x: 0,
            y: 0,
            width: '100%',
            height: '100%'
          },
          item.pixelArea = null,
          item.zoomData = 1
        }
        return item;
      })
      setImageData(newArray);
      handleClose();
    }

    useEffect( () => {

    previewURL(imageIndex);

  }, [resetCrop, cropComplete])

    return (
  <>
      <Button onClick={handleOpen} 
      sx={{
        minWidth:100,
        width:"100%",
        maxWidth: 250
       }}>
        <Card variant="solid" sx={{ 
        position:'relative',
        backgroundColor:'rgb(0,0,0,0)', 
        minWidth:'fit-content',
        maxWidth:200,
        display:'flex',
        flexDirection:'column',
        alignContent:'center',
        justifyContent:'flex-start',
        maxHeight:250
      }}>
        <CardMedia
          component="img"
          image={preview}
          alt="uploaded image"
          sx={{
            minWidth:100,
            width:"100%",
            maxWidth:200,
            aspectRatio:'1/1',
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
              <CircleCrop imageIndex={imageIndex} getCroppedArea={getCroppedArea} getZoomInfo={getZoomInfo} getAreaPixels={getPixels}/>
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
                justifyContent:'space-evenly',
                m:0
              }}>
                <button 
                  onClick={() => resetCrop(imageIndex)}
                  style={{ width:100 }}
                >
                  Reset
                  </button>
                <button 
                  style={{ width:100 }}
                  onClick={() => cropComplete(imageIndex)}
                >
                  Crop
                </button>
              </Box>
          </Box>
        </Modal>
  </>

    )
}