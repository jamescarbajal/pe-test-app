import { useState, useEffect } from "react";
import Cropper from "react-easy-crop";
import getCroppedImg from "./CropImages";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";

// const aspectRatios = [
//   { value: 4 / 3, text: "4/3" },
//   { value: 16 / 9, text: "16/9" },
//   { value: 1 / 2, text: "1/2" },
// ];

const ImageCropDialog = ({
  id,
  imageUrl,
  cropInit,
  zoomInit,
  aspectInit,
  onCancel,
  setCroppedImageFor,
  resetImage,
}) => {
//   if (zoomInit == null) {
//     zoomInit = 1;
//   }
  if (cropInit == null) {
    cropInit = { x: 0, y: 0 };
  }
//   if (aspectInit == null) {
//     aspectInit = aspectRatios[0];
//   }
  const [zoom, setZoom] = useState(1);
  const [crop, setCrop] = useState(cropInit);
//   const [aspect, setAspect] = useState(aspectInit);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropChange = (crop) => {
    setCrop(crop);
  };

  const onZoomChange = (zoom) => {
    setZoom(zoom);
  };

//   const onAspectChange = (e) => {
//     const value = e.target.value;
//     const ratio = aspectRatios.find((ratio) => ratio.value == value);
//     setAspect(ratio);
//   };

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const onCrop = async () => {
    const croppedImageUrl = await getCroppedImg(imageUrl, croppedAreaPixels);
    setCroppedImageFor(id, crop, zoom, aspect, croppedImageUrl);
  };

  const onResetImage = () => {
    resetImage(id);
  };

  return (
    <Box
        sx={{
            position: 'fixed',
            display:'flex',
            flexDirection:'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            top: '50%',
            left: '50%',
            transform:'translate(-50%, -50%)',
            width: '90vw',
            minHeight: 500
        }}    
    >
      <Container
        sx={{
            height:'100%'
        }}
      >
        <Cropper
          image={imageUrl}
          cropShape="round"
          minZoom={1}
          zoom={zoom}
          crop={crop}
          roundCropAreaPixels={true}
          aspect={1}
          objectFit="contain"
          onCropChange={onCropChange}
          onZoomChange={onZoomChange}
          onCropComplete={onCropComplete}
        />
      </Container>
        <div>
          <button onClick={onCancel}>Cancel</button>
          <button onClick={onResetImage}>Reset</button>
          <button onClick={onCrop}>Crop</button>
        </div>
      </Box>
  );
};

export default ImageCropDialog;