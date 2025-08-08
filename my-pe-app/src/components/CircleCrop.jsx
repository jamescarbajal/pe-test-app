import { useState, useEffect } from 'react';
import Cropper from 'react-easy-crop';


export default function CircleCrop( {imageIndex} ) {

  const orderOptions = JSON.parse(sessionStorage.getItem('orderOptions'));
  const orderQty = orderOptions.Quantity;

  useEffect( () => {
    sessionStorage.setItem('croppedImages', []);
  }, []);

  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)

  const pulledArray = JSON.parse(sessionStorage.getItem('sessionImages'));
  const workingImageURL = pulledArray[imageIndex].data_url;

  const onCropAreaChange = (croppedArea, croppedAreaPixels) => {
    // console.log(croppedArea, croppedAreaPixels)

  }

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