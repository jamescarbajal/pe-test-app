import React from 'react'
import Cropper from 'react-easy-crop'
import placeHolderImage from '../assets/images/P-Rex Logo.png'


export default function CircleCrop( {imageIndex} ) {

  const [crop, setCrop] = React.useState({ x: 0, y: 0 })
  const [zoom, setZoom] = React.useState(1)

  const onCropChange = (crop) => {
    setCrop(crop)
  }

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    console.log(croppedAreaPixels.width / croppedAreaPixels.height)
  }

  const onZoomChange = (zoom) => {
    setZoom(zoom)
  }

  const workingImage = JSON.parse(sessionStorage.getItem('sessionImages'))[imageIndex].data_url;



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
          crop={crop}
          zoom={zoom}
          aspect={1}
          cropShape="round"
          showGrid={false}
          onCropChange={onCropChange}
          onCropComplete={onCropComplete}
          onZoomChange={onZoomChange}

        />
    </div>

  )
}