import { TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { Box, Button } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

export default function NumericInput() {
  const [value, setValue] = useState(1); // Initialize the state for the input value

  // Function to handle incrementing the value
  const handleIncrement = () => {
    setValue(prevValue => Math.min(99, prevValue + 1));
  };

  // Function to handle decrementing the value
  const handleDecrement = () => {
    setValue(prevValue => Math.max(1, prevValue - 1)); // Ensure value doesn't go below 0
  };

  // Function to handle direct input changes
  const handleChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue)) { // Only update if it's a valid number
      setValue(newValue);
    }
  };

  return (
    <div>
    <Box sx={{ 
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 30,
        width: 180,
        textAlign:'center'
    }}>
      <RemoveIcon onClick={handleDecrement}
      sx={{
        height: 35,
        width: 40,
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
            width: 30
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
      <AddIcon onClick={handleIncrement}
        sx={{
        height: 35,
        width: 40,
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