import { useState, useEffect } from 'react';
import Cropper from 'react-easy-crop';
import getCroppedImg from './ImageOutput';


export default function CircleCrop( {imageIndex, getCroppedArea, resetCrop} ) {

  const orderOptions = JSON.parse(sessionStorage.getItem('orderDetails'));
  const orderQty = orderOptions.Quantity;

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const pulledArray = JSON.parse(sessionStorage.getItem('workingImages'));
  const workingImageURL = pulledArray[imageIndex].data_url;

  const onCropAreaChange = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
    getCroppedArea(croppedAreaPixels);
  }

  useEffect( () => {
  }, [pulledArray]);

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
          image={workingImageURL}
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