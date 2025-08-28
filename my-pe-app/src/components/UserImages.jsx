import { useContext, useEffect, useState } from 'react';
import ImageUploading from 'react-images-uploading';
import Grid from '@mui/material/Grid';
import CropImageModal from './cropImageModal';
import Box from '@mui/material/Box';
import { Button, Alert, AlertTitle } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';

export default function UserImages() {

  const orderData = JSON.parse(sessionStorage.getItem('orderDetails'));
  const imageCount = orderData.Quantity;

  const [images, setImages] = useState(JSON.parse(sessionStorage.getItem('sessionImages')));
  const [maxImageAlert, setMaxImageAlert] = useState(false);
  const [canContinue, setCanContinue] = useState(false);

  const onChange = (imageList, addUpdateIndex) => {
    if (imageList.length > imageCount){
      setMaxImageAlert(true);
    } else {
      sessionStorage.setItem('sessionImages', JSON.stringify(imageList));
      setImages(imageList);
    }
  };

  const imagesRemaining = (data) => {
    if (data) { 
      return (imageCount - data.length);
    } else return imageCount;
  }

  useEffect( () => {
    if (JSON.parse(sessionStorage.getItem('sessionImages')).length == imageCount) {
      setCanContinue(true);
    }
    if (JSON.parse(sessionStorage.getItem('sessionImages')).length < imageCount) {
      setCanContinue(false);
    }
  }, [imageCount, onChange]);

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
            <Button 
              disabled={!canContinue}
              onClick=''
              variant='contained'
              sx={{
                position: 'sticky',
                top: 10,
                width: '100%',
                maxWidth: 500,
                zIndex: 100,
                mb: 2,
                border: '3px solid black'
              }}
            >
              {canContinue ? 
                <div style={{ color:'black', fontWeight: 700 }}>
                  Continue
                </div> 
                :  
                <div style={{ color: 'black', fontWeight: 700 }}>
                  Please select {imagesRemaining(images)} more images
                </div>
              }
            </Button>
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
              <button
                style={ (isDragging ? { color: 'red' } : undefined) }
                onClick={onImageUpload}
                {...dragProps}
              >
                Upload
              </button>
              <button onClick={onImageRemoveAll}>
                Clear All
              </button>
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
                    <CropImageModal imageIndex={index}/>
                    <Box sx={{
                      minWidth: 'fit-content',
                      height: 45,
                      m:0,
                      p:0
                    }}>
                      <Button 
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