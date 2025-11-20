import { useState, useEffect, useContext } from 'react';
import { update } from 'idb-keyval';
import { getImages, storeImages } from '../utils/idb-keyval';
import Cropper from 'react-easy-crop';
import { ImagesContext } from '../contexts/ImagesContext';
import { Box } from '@mui/material';
import { CircularProgress } from '@mui/material';


export default function CircleCrop( {imageIndex, getCroppedArea, getZoomInfo, getAreaPixels } ) {

  const { originalImages, setOriginalImages, imageData, setImageData, croppedImages, setCropedImages, cropReset, setCropReset  } = useContext(ImagesContext);

  const orderOptions = JSON.parse(sessionStorage.getItem('orderDetails'));
  const orderQty = orderOptions.Quantity;

  const [crop, setCrop] = useState( { x:0, y:0 } );
  const [zoom, setZoom] = useState(1);
  const [workingURL, setWorkingURL] = useState(null)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const handleImageLoad = () => {
        setLoaded(true);
    };

  const getInitialCrop = async (index) => {
    if (!originalImages[index].cropData){
      setCrop({ x:0, y:0 })
    } else {
      updateCropAndZoom(index);
    }
  }

  const updateCropAndZoom = (data) => {
   if (imageData && imageData[data]){
    const cropInfo = imageData[data].cropData
    const zoomInfo = imageData[data].zoomData;
    if (cropInfo) {
      setCrop({
        x: cropInfo.x,
        y: cropInfo.y
      })
    }
    if (zoomInfo){
      setZoom(zoomInfo);
    }
  }
  setWorkingURL(originalImages[data].data_url);
  }

  const onCropComplete = async (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
    getCroppedArea(crop);
    getAreaPixels(croppedAreaPixels);
    getZoomInfo(zoom);
  }


  useEffect( () => {

    getInitialCrop(imageIndex);
    updateCropAndZoom(imageIndex);

  }, []);

  return (
    <div style={{ 
      position:'relative',
      display:'flex',
      justifyContent:'center',
      alignContent:'center',
      height:'100%', 
      width: 700,
      maxWidth:'100%', 
      }} >
      {!loaded && (
        <Box 
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 425
            }}
        >
        <CircularProgress color="secondary"/>
        </Box>
      )}
        <Cropper
          onMediaLoaded={handleImageLoad}
          image={workingURL}
          showGrid={false}
          cropShape="round"
          crop={crop}
          zoom={zoom}
          aspect={1}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}

        />
    </div>
  )
}