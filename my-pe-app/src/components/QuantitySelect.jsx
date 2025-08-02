import * as React from 'react';
import { useState, useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function QuantitySelect( { qtyCallback } ) {

  const sessionQuantity = () => {
    const data = sessionStorage.getItem('orderOptions');
    const parsedData = JSON.parse(data);
    if (parsedData && parsedData.Quantity) {
      return parsedData.Quantity
    }
    else return ''
  }

  const [quantity, setQuantity] = useState(sessionQuantity);
  const handleChange = (e) => {
    setQuantity(e.target.value);
    qtyCallback(e.target.value);
  };


  return (
    <div>
      <FormControl sx={{ m: 1, minWidth:200, maxWidth:'100%' }}>
        <InputLabel id="quantity-select-dropdown">Quantity</InputLabel>
        <Select
          required
          fullWidth
          labelId="quantity-select"
          id="quantity-select"
          value={quantity}
          label="quantity"
          onChange={handleChange}
        >
          <MenuItem value={9}>9 Images - $25</MenuItem>
          <MenuItem value={18}>18 Images - $50</MenuItem>
          <MenuItem value={27}>27 Images - $70</MenuItem>
          <MenuItem value={36}>36 Images - $90</MenuItem>
          <MenuItem value={45}>45 Images - $110</MenuItem>
        </Select>
        <FormHelperText>Select order quantity</FormHelperText>
      </FormControl>
    </div>
  );
}
