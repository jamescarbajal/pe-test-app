import { useState, useEffect } from 'react';
import ImageUploading from 'react-images-uploading';
import Grid from '@mui/material/Grid';
import CropImageModal from './cropImageModal';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

export default function UserImages() {

  const orderData = JSON.parse(sessionStorage.getItem('orderDetails'));
  const imageCount = orderData.Quantity;

  const [images, setImages] = useState(JSON.parse(sessionStorage.getItem('sessionImages')));

  const onChange = (imageList, addUpdateIndex) => {
    const pulledArray = JSON.parse(sessionStorage.getItem('sessionImages'));
    console.log('Pulled array: ', pulledArray);
    if (pulledArray){
      setImages(imageList);
      sessionStorage.setItem('sessionImages', JSON.stringify(imageList));
    } else {
      setImages(imageList)
      sessionStorage.setItem('sessionImages', JSON.stringify(imageList));
    }
  };

  const sessionImageList = JSON.parse(sessionStorage.getItem('sessionImages'));

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
            { sessionImageList ? 
              (
                sessionImageList.map((image, index) => (
                <Grid key={index} size={{ xs: 2, sm: 4, md: 6 }}
                  sx={{
                      position:'relative',
                      display:'flex',
                      flexDirection:'column',
                      justifyContent:'center',
                      alignItems:'center',
                      height:'fit-content',
                      maxWidth:200
                  }}>
                    <h4 style={{
                        marginTop:0,
                        marginBottom:0,
                        color:'black'
                    }}>Image {index + 1}
                    </h4>
                    
                    <CropImageModal imageIndex={index}/>
                    <Box sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                      width: 175,
                      minWidth: 'fit-content'
                    }}>
                      <button
                        onClick={() => onImageRemove(index)} 
                        style={{ 
                          width:75,
                          padding: 5
                      }}>Delete</button>
                      <button onClick={() => onImageUpdate(index)} 
                        style={{ 
                          width:75, 
                          padding: 5
                      }}>Replace</button>
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