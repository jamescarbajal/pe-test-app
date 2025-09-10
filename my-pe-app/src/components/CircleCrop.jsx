import { useState, useEffect, useContext } from 'react';
import Cropper from 'react-easy-crop';
import { ImagesContext } from '../contexts/ImagesContext';
import getCroppedImg from './ImageOutput';


export default function CircleCrop( {imageIndex, getCroppedArea } ) {

  const { cropReset, setCropReset  } = useContext(ImagesContext);

  const orderOptions = JSON.parse(sessionStorage.getItem('orderDetails'));
  const orderQty = orderOptions.Quantity;

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const pulledArray = JSON.parse(sessionStorage.getItem('sessionImages'));
  const workingImageURL = pulledArray[imageIndex].data_url;

  const onCropAreaChange = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
    getCroppedArea(croppedAreaPixels);
  }

  useEffect( () => {
    if (cropReset){
      setCrop({x: 0, y:0, width: '100%', height: '100%'});
      setZoom(1);
      setCropReset(false);
    };
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