import { useContext, useEffect, useState } from 'react';
import { storeImages, getImages } from '../utils/idb-keyval';
import NumericInput from '../utils/number-input';
import ImageUploading from 'react-images-uploading';
import Grid from '@mui/material/Grid';
import CropImageModal from './cropImageModal';
import Box from '@mui/material/Box';
import { Button, Alert, AlertTitle, Typography } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import { ImagesContext } from '../contexts/ImagesContext';
import { set } from 'idb-keyval';

export default function UserImages() {

  const { cropReset, setCropReset } = useContext(ImagesContext);

  const orderData = JSON.parse(sessionStorage.getItem('orderDetails'));
  const imageCount = orderData.Quantity;

  const [images, setImages] = useState([]);
  const [maxImageAlert, setMaxImageAlert] = useState(false);
  const [canContinue, setCanContinue] = useState(false);
  const [userImageCount, setUserImageCount] = useState(0);
  const [tally, setTally] = useState(0);


  // const handleQtyChange = async (data) => {
  //   const imageArray = await getImages('userImages');
  //   if(!imageArray){
  //     return
  //   }
  //   let sum = 0;
  //   for (let i = 0; i < imageArray.length; i++){
  //     sum += imageArray[i].qty;
  //   }
  //   setTally(sum);
  //   return sum;
  // };


  const checkIdbImages = async () => {
    const checkImages = await getImages('userImages');
      if (checkImages) {
        setImages(checkImages);
      } else {
        setImages([])
      }
    console.log('checkIdbImages has run! Image array is: ',checkImages);
  };

  const collectTally = async (data) => {
    const imageArray = await getImages('userImages');
    if(!imageArray){
      return
    }
      const totalPrice = imageArray.reduce((accumulator, item) => {
        return accumulator + item.qty;
      }, 0);
      setUserImageCount(data);
      console.log('sum is: ', totalPrice);
      setTally(totalPrice);
  }

  const initializeCropAndZoom = async () => {
    const imageArray = await getImages('userImages')
    if (imageArray.cropData && imageArray.zoomData){
      return;
    }
    const updatedImages = await imageArray.map((obj) => {
      if (!obj || !obj.zoomData || obj.zoomData == null || obj.zoomData == undefined){
        return {
        ...obj,
        zoomData: 1
        }
      } if (!obj.cropData || obj.cropData == null || obj.cropData == undefined) {
        return {
            ...obj,
            cropData: {
            x: 0,
            y: 0,
            width: '100%',
            height: '100%',
          }
      }
      }
      return obj;
    });
    await storeImages('userImages', updatedImages);
  }



// ****************************************************


  const initializePixelArea = async () => {
    const imageArray = await getImages('userImages')
    const updatedImages = await imageArray.map((obj) => {
      if (!obj.pixelArea || obj.pixelArea == null || obj.pixelArea == undefined) {
         return {
            ...obj,
            pixelArea: null
         }
      }
      return obj;
    });
    await storeImages('userImages', updatedImages);
  }


// ****************************************************

  const mergeArrays = (array1, array2) => {
    const finalArray = [...array1];
    for (let i = array1.length; i < array2.length; i++){
      finalArray.push(array2[i]);
    }
    return finalArray;
  }

  const onChange = async (imageList, addUpdateIndex) => {
    const imageArray = await getImages('userImages');
    if (imageList.length > imageCount){
      setMaxImageAlert(true);
    } else {
      imagesRemaining(imageCount);
      setMaxImageAlert(false);
      const updatedArray = mergeArrays(imageArray, imageList);
      console.log('updatedArray list: ', updatedArray)
      await storeImages('userImages', updatedArray);
      await initializeCropAndZoom();
      await initializePixelArea();
      checkIdbImages();
    }
  };

  const onImageCopy = async (index) => {
    const imageArray = await getImages('userImages');
    const currentImageCount = imageArray.length;
    if ( currentImageCount < imageCount ) {
      const copiedObject = structuredClone(imageArray[index]);
      const newImages = [...imageArray.slice(0, index), copiedObject, ...imageArray.slice(index)];
      onChange(newImages);
    } 
    else setMaxImageAlert(true);
  }

  const onImageRemove = async (indexToRemove) => {
    const imageArray = await getImages('userImages');
    const updatedArray = imageArray.filter((_, index) => index !== indexToRemove);
    await storeImages('userImages', updatedArray);
    onChange(updatedArray)
  };

  const onImageRemoveAll = () => {
    setImages([]);
    storeImages('userImages', []);
  }


  const imagesRemaining = (data) => {
      console.log('tally is: ', tally);
        if (tally == data) {
          setCanContinue(true);
        }
        if (tally < data){
          setMaxImageAlert(false);
        }
        if (tally < data || tally > data) {
          setCanContinue(false);
        }
        if (tally > data) {
          setMaxImageAlert(true);
        }
        return (data - tally);
  };


  useEffect( () => {
    checkIdbImages();
    console.log('checkIdbImages has run!');
  }, [])

  useEffect( () => {
    collectTally();
    imagesRemaining(imageCount);
    console.log('images remaining is ', imagesRemaining(imageCount));

  }, [tally, images, imageCount, userImageCount, onChange, onImageRemove])

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
          onImageUpdate,
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
                  Added {tally} out of {imageCount} images
                </p>
              </Button>
              }
              {maxImageAlert && (
                <Box sx={{
                  position: 'fixed',
                  top: '30%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 350,
                  mb: 2,
                  zIndex: 1000
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
                      height: "fit-content",
                      maxWidth: 250,
                      backgroundColor: 'rgba(131, 32, 32, 0.2)',
                      borderRadius: 5
                  }}>
                    <Box sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      minWidth:'fit-content',
                      width: '100%',
                      maxHeight: 30,
                      pl:1,
                      pr:1
                    }}>
                    <h4 style={{
                      display:'flex',
                      flexGrow:6,
                      color:'black',
                      paddingLeft:5
                    }}>
                        Image {index + 1}
                    </h4>
                          <DeleteForeverIcon onClick={() => onImageRemove(index)}
                            style={{ 
                              display:'flex',
                              flexGrow:1,
                              fontSize: 30,
                              color:"darkred"
                            }} />
                    </Box>
                    <CropImageModal imageIndex={index} dataURL={image.data_url} cropData={image.cropData} />
                    <NumericInput imageIndex={index} maxCount={imageCount} images={images} count={collectTally} canContinue={canContinue}
                      />
                      {/* <Button onClick={() => onImageUpdate(index)}
                        style={{
                          color: 'black',
                          m:0,
                          p:0
                        }}>
                          <ChangeCircleIcon sx={{ fontSize: 30 }} />
                      </Button> */}
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