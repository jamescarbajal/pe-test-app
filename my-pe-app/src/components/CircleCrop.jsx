import React from 'react'
import Cropper from 'react-easy-crop'
import placeHolderImage from '../assets/images/person-placeholder-image.jpg'


export default function CircleCrop() {

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
          image={placeHolderImage}
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