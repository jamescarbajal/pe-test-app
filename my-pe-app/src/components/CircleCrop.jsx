import { useState, useEffect } from 'react';
import Cropper from 'react-easy-crop';


export default function CircleCrop( {imageIndex} ) {

  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [initialCroppedArea, setInitialCroppedArea] = useState(undefined)
  const [zoom, setZoom] = useState(1)

  const pulledArray = JSON.parse(sessionStorage.getItem('sessionImages'));
  const workingImage = pulledArray[imageIndex].data_url;

  useEffect(() => {
    const croppedArea = JSON.parse(sessionStorage.getItem('croppedArea'))
    setInitialCroppedArea(croppedArea)
  }, [])

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels)
    // sessionStorage.setItem('croppedArea', JSON.stringify(croppedArea))
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
          image={workingImage}
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