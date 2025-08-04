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
            <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ 
                display:'flex',
                flexDirection:'row',
                alignContent:'center',
                alignItems:'center',
                width:'fit-content',
                height:'fit-content',
                pt: 5
             }}>
            { sessionImageList ? 
              (
                sessionImageList.map((image, index) => (
                <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}
                  sx={{
                      display:'flex',
                      flexDirection:'column',
                      justifyContent:'center',
                      alignItems:'center',
                      height:'fit-content',
                      m:0
                  }}>
                    <h4 style={{
                        marginTop:0,
                        marginBottom:0,
                        color:'black'
                    }}>Image {index + 1}
                    </h4>
                    <CropImageModal imageIndex={index}/>
                </Grid>
                ))
              )
              :
              (
                <div>Upload to preview.</div>
              ) 
            }
            </Grid>
          </div>
        )}
      </ImageUploading>
    </div>
  );
}