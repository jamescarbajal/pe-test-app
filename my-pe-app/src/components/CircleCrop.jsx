import { useState, useEffect, useContext } from 'react';
import { getImages, storeImages } from '../utils/idb-keyval';
import Cropper from 'react-easy-crop';
import { ImagesContext } from '../contexts/ImagesContext';
import getCroppedImg from './ImageOutput';


export default function CircleCrop( {imageIndex, getCroppedArea, getZoomInfo } ) {

  const { cropReset, setCropReset  } = useContext(ImagesContext);

  const orderOptions = JSON.parse(sessionStorage.getItem('orderDetails'));
  const orderQty = orderOptions.Quantity;

  const [crop, setCrop] = useState({x: 0, y:0});
  const [zoom, setZoom] = useState(1);
  const [workingURL, setWorkingURL] = useState(null)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const currentCropAndZoom = async (data) => {
    const imageArray = await getImages('userImages')
    const cropInfo = imageArray[data].cropData
    const zoomInfo = imageArray[data].zoomData;
    setCrop({
      x: cropInfo.x,
      y: cropInfo.y,
      width: cropInfo.width,
      height: cropInfo.height,
    })
    setZoom(zoomInfo);
    console.log('Current Crop info: ', cropInfo, '\nCurrent zoom info: ', zoomInfo);
  }

  const onCropAreaChange = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
    getCroppedArea(croppedAreaPixels);
    getZoomInfo(zoom);
    console.log('Zoom data: ', zoom);
  }


  useEffect( () => {

    currentCropAndZoom(imageIndex);

    if (cropReset){
      setCrop({x: 0, y:0, width: '100%', height: '100%'});
      setZoom(1);
      setCropReset(false);
    };
    
    const getImageURL = async (data) => {
      const pulledArray = await getImages('userImages');
      const currentURL = pulledArray[data].data_url;
      setWorkingURL(currentURL)
    }

    getImageURL(imageIndex);

  }, [imageIndex, cropReset]);

  useEffect( () => {
    currentCropAndZoom(imageIndex);
  }, [])

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
        <Cropper
          image={workingURL}
          showGrid={false}
          cropShape="round"
          crop={crop}
          zoom={zoom}
          aspect={1}
          onCropChange={setCrop}
          onCropAreaChange={onCropAreaChange}
          onZoomChange={setZoom}

        />
    </div>
  )
}