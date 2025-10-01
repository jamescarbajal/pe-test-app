import { useContext, useEffect, useState } from 'react';
import { storeImages, getImages } from '../utils/idb-keyval';
import ImageUploading from 'react-images-uploading';
import Grid from '@mui/material/Grid';
import CropImageModal from './cropImageModal';
import Box from '@mui/material/Box';
import { Button, Alert, AlertTitle, Typography } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import { update } from 'idb-keyval';

export default function UserImages() {



  const orderData = JSON.parse(sessionStorage.getItem('orderDetails'));
  const imageCount = orderData.Quantity;

  const [images, setImages] = useState([]);
  const [maxImageAlert, setMaxImageAlert] = useState(false);
  const [canContinue, setCanContinue] = useState(false);

    const checkIdbImages = async () => {
      const checkImages = await getImages('userImages');
      if (checkImages) {
      setImages(checkImages);
    } else {
      setImages([])
    }
  };

  const initializeCropAndZoom = async () => {
    const imageArray = await getImages('userImages')
    const updatedImages = await imageArray.map((obj) => {
      if (obj.cropData && obj.zoomData) {
        return obj;
      }
      if (!obj.cropData && !obj.zoomData) {
        return {
            ...obj,
            cropData: {
            x: 0,
            y: 0,
            width: '100%',
            height: '100%',
          },
          zoomData: 1
        };
      } else if (!obj.zoomData && obj.cropData ){
        return {
        ...obj,
        zoomData: 1
        }
      } else if (!obj.cropData && obj.zoomData) {
              if (!cropData) {
        return {
            ...obj,
            cropData: {
            x: 0,
            y: 0,
            width: '100%',
            height: '100%',
          }
        };
      }
      }

    });
    const newUserImages = updatedImages;
    storeImages('userImages', newUserImages);
    console.log('Crop and Zoom Data Initialized!');
  }

  const onChange = (imageList, addUpdateIndex) => {
    if (imageList.length > imageCount){
      setMaxImageAlert(true);
    } else {
      storeImages('userImages', imageList);
      setImages(imageList);
      initializeCropAndZoom();
      imagesRemaining(imageCount);
    }
  };

  const onImageCopy = (index) => {
    const currentImageCount = images.length;
    if ( currentImageCount < imageCount ) {
    const newImages = [...images.slice(0, index), images[index], ...images.slice(index)];
      onChange(newImages);
    } 
    else setMaxImageAlert(true);
  }

  const imagesRemaining = (data) => {
    console.log('Counting images...');
    const userImages = images;
      if (userImages){
        if (userImages.length == data) {
          setCanContinue(true);
        }
        if (userImages.length < data) {
          setCanContinue(false);
        }
        return (data - userImages.length)
      } else return data;
  };

  useEffect( () => {
    imagesRemaining(imageCount);
    initializeCropAndZoom();
  }, [images, , onImageCopy, onChange])

  useEffect( () => {
    checkIdbImages();
  }, [])



  return (

    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
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
            
          <Box sx={{
            position:'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width:'90vw'
          }}>
            <Box
            sx={{ mb:2 }}>
              <Typography variant='h6'>Click each image to crop.</Typography>
            </Box>
              {canContinue ? 
                <Button 
                  disabled={!canContinue}
                  onClick=''
                  sx={{
                    position: 'sticky',
                    top: 10,
                    width: '100%',
                    maxWidth: 500,
                    height: 40,
                    zIndex: 100,
                    p:0,
                    mb: 2,
                    border: '3px solid black',
                    backgroundColor: 'rgb(39, 85, 254)',
                    fontWeight: 700
                  }}>
                    <p style={{ color:'black', fontWeight: 700, margin:0, padding:0 }}>
                      Continue
                    </p>
              </Button>
                :  
              <Button 
                disabled={true}
                onClick=''
                sx={{
                  position: 'sticky',
                  top: 10,
                  width: '100%',
                  maxWidth: 500,
                  height: 40,
                  zIndex: 100,
                  p:0,
                  mb: 2,
                  border: '3px solid black',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  fontWeight: 700
                }}>
                <p style={{ color:'lightgrey', fontWeight: 700, margin:0, padding:0 }}>
                  Please select {imagesRemaining(imageCount)} more images.
                </p>
              </Button>
              }
              {maxImageAlert && (
                <Box sx={{
                  mb: 2
                }}>
                  <Alert
                    severity='warning'
                    onClose={() => setMaxImageAlert(false)}
                  >
                    <AlertTitle>Too many images!</AlertTitle>
                    For more than {imageCount} images, please select a larger order size!
                  </Alert>
                </Box>
              )}
            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              width: 300,
              minWidth: 'fit-content'
            }}>
              <Button
                variant='contained'
                style={ (isDragging ? { color: 'blue', backgroundColor:'white' } : undefined) }
                onClick={onImageUpload}
                {...dragProps}
                sx={{
                  backgroundColor:'black'

                  
                }}
              >
                Upload
              </Button>
              <Button 
              variant='contained'
              onClick={onImageRemoveAll}
              sx={{
                backgroundColor:'black'
              }}>
                Clear All
              </Button>
            </Box>
            <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ 
                position:'relative',
                display:'flex',
                flexDirection:'row',
                justifyContent:'flex-start',
                width:'100%',
                height:'fit-content',
                pt: 2
             }}>
            { imageList ? 
              (
                imageList.map((image, index) => (
                <Grid key={index} size={{ xs: 2, sm: 4, md: 6 }}
                  sx={{
                      position:'relative',
                      display:'flex',
                      flexDirection:'column',
                      justifyContent: 'center',
                      alignItems:'center',
                      height: 280,
                      maxWidth: 250,
                      backgroundColor: 'rgba(131, 32, 32, 0.2)',
                      borderRadius: 5
                  }}>
                    <Box sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '100%',
                      maxHeight: 30,
                      maxWidth: 200,
                      m: 0,
                      pt: 2
                    }}>
                    <h4 style={{
                      flexGrow: 3,
                        color:'black'
                    }}>
                        Image {index + 1}
                    </h4>
                      <Button onClick={() => onImageRemove(index)} 
                        style={{
                          m:0,
                          p: 0,
                          color: 'darkred'
                        }}>
                          <DeleteForeverIcon sx={{ fontSize: 30 }} />
                      </Button>
                    </Box>
                    <CropImageModal imageIndex={index} dataURL={image.data_url} cropData={image.cropData} />
                    <Box 
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      minWidth: 'fit-content',
                      width: 140,
                      height: 45,
                      m:0,
                      p:0
                    }}>
                      <Button 
                        onClick={() => onImageCopy(index)}
                        style={{
                          color: 'black',
                          m:0,
                          p:0
                        }}>
                          <ContentCopyIcon sx={{ fontSize: 30 }} />
                      </Button>
                      <Button onClick={() => onImageUpdate(index)}
                        style={{
                          color: 'black',
                          m:0,
                          p:0
                        }}>
                          <ChangeCircleIcon sx={{ fontSize: 30 }} />
                      </Button>
                    </Box>
                </Grid>
                ))
              )
              :
              (
              <>                
                <div>Upload to preview.</div>
              </>
              ) 
            }
            </Grid>
          </Box>
        )}
      </ImageUploading>
    </div>
  );
}