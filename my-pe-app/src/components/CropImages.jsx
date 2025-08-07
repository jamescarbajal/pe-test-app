import { useState } from "react";
import ImageCropDialog from "./ImageCropDialog";
import UserImagesStorage from "./UserImagesStorage";
import Card from "@mui/material/Card";
import iguana from "../assets/images/iguanas-on-rocks-stockcake.jpg";
import person from "../assets/images/person-placeholder-image.jpg";
import keychain from "../assets/images/keychain-example.jpg";
import pinback from "../assets/images/pinback-example.jpg";
import CardMedia from "@mui/material/CardMedia";

// const initData = () => {
//     const pulledImages = JSON.parse(sessionStorage.getItem('sessionImages'));
//     if (pulledImages){
//         return pulledImages
//     } else return []
// }

const initData = [
  {
    id: 1,
    imageUrl: iguana,
    croppedImageUrl: null,
  },
  {
    id: 2,
    imageUrl: person,
    croppedImageUrl: null,
  },
  {
    id: 3,
    imageUrl: keychain,
    croppedImageUrl: null,
  },
  {
    id: 4,
    imageUrl: pinback,
    croppedImageUrl: null,
  },
];

export default function CropImages() {
  const [images, setImages] = useState(initData);
  const [selectedImage, setSelectedImage] = useState(null);

  const onCancel = () => {
    setSelectedImage(null);
  };

  const setCroppedImageFor = (id, crop, zoom, aspect, croppedImageUrl) => {
    const newImageList = [...images];
    const imgIndex = images.findIndex((x) => x.id === id);
    const img = images[imgIndex];
    const newImage = { ...img, croppedImageUrl, crop, zoom, aspect };
    newImageList[imgIndex] = newImage;
    setCars(newImageList);
    setSelectedCar(null);
  };

  const resetImage = (id) => {
    setCroppedImageFor(id);
  };

  return (
    <div>

      {selectedImage ? (
        <ImageCropDialog
          id={selectedImage.id}
          imageUrl={selectedImage.imageUrl}
          cropInit={selectedImage.crop}
          zoomInit={selectedImage.zoom}
          aspectInit={selectedImage.aspect}
          onCancel={onCancel}
          setCroppedImageFor={setCroppedImageFor}
          resetImage={resetImage}
          sx={{
            width: '90vw',
            height: 500,
            position: 'absolute',
            top: 0,
            left: 0
          }}
        />
      ) : null}
      {images.map((item) => (
        <CardMedia key={item.id} sx={{
            m: 5,
            maxWidth: 500,
        }}>
          <img
            width="100%"
            src={item.croppedImageUrl ? item.croppedImageUrl : item.imageUrl}
            alt=""
            onClick={() => {
              console.log(item);
              setSelectedImage(item);
            }}
          />
        </CardMedia>
      ))}
    </div>

  );
}