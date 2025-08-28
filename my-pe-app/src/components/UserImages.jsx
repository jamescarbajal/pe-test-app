import { useContext, useEffect, useState } from 'react';
import ImageUploading from 'react-images-uploading';
import Grid from '@mui/material/Grid';
import CropImageModal from './cropImageModal';
import Box from '@mui/material/Box';
import { ImagesContext } from '../contexts/ImagesContext';
import { Button } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';

export default function UserImages() {

  const orderData = JSON.parse(sessionStorage.getItem('orderDetails'));
  const imageCount = orderData.Quantity;

  const [images, setImages] = useState(JSON.parse(sessionStorage.getItem('workingImages')));
  const { editedImages, setEditedImages } = useContext(ImagesContext);

  const previewImages = JSON.parse(sessionStorage.getItem('workingImages'))

  const onChange = (imageList, addUpdateIndex) => {
      sessionStorage.setItem('sessionImages', JSON.stringify(imageList));
      sessionStorage.setItem('workingImages', JSON.stringify(imageList));
      setImages(imageList);
      setEditedImages(imageList);
  };

  const imagesRemaining = (data) => {
    if (data) { 
      return (imageCount - data.length);
    } else return imageCount;
  }

  useEffect( () => {
  }, [images]);

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
            
          <Box sx={{
            position:'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width:'90vw'
          }}>
            <p>{imagesRemaining(images)} images remaining</p>
            <br/>
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
                justifyContent:'center',
                width:'100%',
                height:'fit-content',
                pt: 2
             }}>
            { previewImages ? 
              (
                previewImages.map((image, index) => (
                <Grid key={index} size={{ xs: 2, sm: 4, md: 6 }}
                  sx={{
                      position:'relative',
                      display:'flex',
                      flexDirection:'column',
                      justifyContent: 'center',
                      alignItems:'center',
                      height: 280,
                      width: 180,
                      backgroundColor: 'rgba(0, 0, 0, 0.2)',
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