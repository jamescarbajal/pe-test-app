import { useState, useEffect } from 'react';
import ImageUploading from 'react-images-uploading';
import Grid from '@mui/material/Grid';
import CropImageModal from './cropImageModal';
import Alert from '@mui/material/Alert';

export default function UserImages() {

  const orderData = JSON.parse(sessionStorage.getItem('orderOptions'));
  const imageCount = orderData.Quantity;

  const [images, setImages] = useState(JSON.parse(sessionStorage.getItem('sessionImages')));

  const onChange = (imageList, addUpdateIndex) => {
    const pulledArray = JSON.parse(sessionStorage.getItem('sessionImages'));
    console.log('Pulled array: ', pulledArray);
    if (pulledArray){
    console.log('Image List: ', imageList)
    setImages(imageList);
    console.log('Images: ', images);
    sessionStorage.setItem('sessionImages', JSON.stringify(imageList));
    } else {
      setImages(imageList)
      sessionStorage.setItem('sessionImages', JSON.stringify(imageList));
    }
  };


  const sessionImageList = JSON.parse(sessionStorage.getItem('sessionImages'));
  console.log('Session Image List: ', sessionImageList);

  return (
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={imageCount}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
            
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
              sx={{
                mb: 5
              }}
            >
              Upload
            </button>
          </div>
        )}
      </ImageUploading>
    </div>
  );
}