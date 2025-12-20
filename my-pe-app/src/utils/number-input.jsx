import { TextField, Typography } from '@mui/material';
import { useState, useEffect, useContext } from 'react';
import { ImagesContext } from '../contexts/ImagesContext';
import { Box } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

export default function NumericInput( {imageIndex, images, count, canContinue} ) {
  const [value, setValue] = useState(1); // Initialize the state for the input value

  const { originalImages, setOriginalImages, imageTally, setImageTally, imageData, setImageData, croppedImages, setCroppedImages } = useContext(ImagesContext);

  const orderData = JSON.parse(sessionStorage.getItem('orderDetails'));
  const maxCount = orderData.Quantity;

    const checkForQty = (data) => {
      if (imageData && imageData[data] && imageData[data].qty) {
        const currentValue = imageData[data].qty;
          setValue(currentValue);
      }
    }

  // const initializeQuantity = async () => {
  //   if (imageData[imageIndex] === 0 && originalImages[imageIndex]){
  //     const updatedArray = await imageData.map( (obj, index) => {
  //       if (index === imageIndex){
  //         return {
  //           ...obj,
  //           qty: 1
  //         }
  //       }
  //       return obj;
  //     })
  //     setImageData(updatedArray);
  //   }
  // }


  const storeQuantity = () => {
    if(!imageData){
      return
    }
    const newArray = [...imageData];
    newArray[imageIndex].qty = value;
    setImageData(newArray);
}

  // Function to handle incrementing the value
  const handleIncrement = (data) => {
    if (!canContinue){
    setValue(prevValue => Math.min(orderData.Quantity, prevValue + 1));
    }
  };

  // Function to handle decrementing the value
  const handleDecrement = (data) => {
    setValue(prevValue => Math.max(1, prevValue - 1)); // Ensure value doesn't go below 0
  };

  // Function to handle direct input changes
  const handleChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue)) { // Only update if it's a valid number
      setValue(newValue);
    }
  };

  useEffect( () => {
    storeQuantity();
  }, [value, originalImages])


  useEffect( () => {

    checkForQty(imageIndex);

  }, [originalImages, imageData]);

  // useEffect( () => {
  //   count(value);
  // }, [value, handleIncrement, handleDecrement])

  return (
    <div
    style={{
      display:'flex',
      justifyContent:'center',
      minWidth:100,
      width:"100%",
      maxWidth:250
    }}>
    <Box sx={{ 
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: 30,
        minWidth: 100,
        width:"100%",
        maxWidth:250,
        textAlign:'center',
    }}>
      <RemoveIcon onClick={() => handleDecrement(imageIndex)}
      sx={{
        height: 20,
        width: 30,
        color: 'white',
        backgroundColor: 'black',
        borderRadius: 3,
        '&:hover': {
            color: 'black',
            backgroundColor: '#E49999',
            border: '2px solid black'
        }
      }}
      />
      <Typography
        sx={{
            fontWeight: 700,
            width: 40
        }}
      >
        Qty:
      </Typography>
      <TextField
        variant="standard"
        align="center"
        value={value}
        onChange={handleChange}
        sx={{ 
            width: 20, 
            align: 'center',
            '& .MuiInputBase-input': { // Target the actual input element
          fontWeight: 'bold',
        }
        }}
      />
      <AddIcon onClick={() => handleIncrement(imageIndex)}
        sx={{
        height: 20,
        width: 30,
        color: 'white',
        backgroundColor: 'black',
        borderRadius: 3,
        '&:hover': {
            color: 'black',
            backgroundColor: '#E49999',
            border: '2px solid black'
        }}
      } />
    </Box>
    </div>
  );
}