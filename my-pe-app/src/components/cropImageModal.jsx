import { useContext, useEffect, useState } from 'react';
import { storeImages, getImages } from '../utils/idb-keyval';
import { update } from 'idb-keyval';
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

    const { cropReset, setCropReset } = useContext(ImagesContext);

    const [isOpen, setOpen] = useState(false);
    const [recievedAreaData, setReceivedAreaData] = useState(null);
    const [receivedZoomData, setReceivedZoomData] = useState(null);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    const [preview, setPreview] = useState('');

    const previewURL = async (index) => {
      const getImageData = await getImages('userImages');
      const url = getImageData[index].data_url;
      const pixel = getImageData[index].pixelArea;
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

    const cropComplete = async (data) => {
      const imageArray = await getImages('userImages')
      const updatedImages = await imageArray.map((obj, index) => {
        if (index === data) {
          return {
            data_url: obj.data_url,
            cropData: recievedAreaData,
            zoomData: receivedZoomData,
            pixelArea: croppedAreaPixels
            }
          };
        return obj;
      });
      await update('userImages', () => {
        return updatedImages
      })
      handleClose();
    }

    const resetCrop = async (data) => {
      const imageArray = await getImages('userImages');
      const newArray = await imageArray.map((item, index) => {
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
      const updatedArray = await newArray;
      await storeImages('userImages',updatedArray);
      handleClose();
    }

    useEffect( () => {

    previewURL(imageIndex);

  }, [resetCrop])

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
        justifyContent:'flex-start',
        maxHeight:250
      }}>
        <CardMedia
          component="img"
          image={preview}
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