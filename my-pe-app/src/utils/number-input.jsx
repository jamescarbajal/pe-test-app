import { TextField, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { Box, Button } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { storeImages, getImages } from './idb-keyval';

export default function NumericInput( {imageIndex, images, count, canContinue} ) {
  const [value, setValue] = useState(''); // Initialize the state for the input value



  const orderData = JSON.parse(sessionStorage.getItem('orderDetails'));
  const maxCount = orderData.Quantity;

  const checkForQty = async (imageIndex) => {
    const imageArray = await getImages('userImages');
    if (imageArray && imageArray[imageIndex].qty) {
        setValue(imageArray[imageIndex].qty);
    } else setValue(1);
    console.log('Current image', imageIndex, 'value is: ', value);
    console.log('Image', imageIndex, 'stored quantity is: ', imageArray[imageIndex].qty || value);
  }

  const storeQuantity = async () => {
    const imageArray = await getImages('userImages');
    const updatedArray = imageArray.map((obj, index) => {
      if ( index == imageIndex ) {
        return {
            ...obj,
            qty: value
        }
      }
      return obj;
      })
    storeImages('userImages', updatedArray);
    console.log('Quantity stored for image', imageIndex, 'in number-input: ', value);
}

  // Function to handle incrementing the value
  const handleIncrement = (data) => {
    if (!canContinue){
    setValue(prevValue => Math.min(orderData.Quantity, prevValue + 1));
    storeQuantity();
    }
  };

  // Function to handle decrementing the value
  const handleDecrement = (data) => {
    setValue(prevValue => Math.max(1, prevValue - 1));
    storeQuantity(); // Ensure value doesn't go below 0
  };

  // Function to handle direct input changes
  const handleChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue)) { // Only update if it's a valid number
      setValue(newValue);
      getValue(newValue);
    }
  };

  useEffect( () => {
    storeQuantity();
    count(value);
  }, [value])


  useEffect( () => {
    checkForQty(imageIndex);
  }, [imageIndex, images]);

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