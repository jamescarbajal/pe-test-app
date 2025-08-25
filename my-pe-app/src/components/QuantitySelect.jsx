import { useState, useEffect, useContext } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Order from '../pages/Order';


export default function QuantitySelect() {

  const sessionOrderDetails = JSON.parse(sessionStorage.getItem('orderDetails'));

  const [ value, setValue ] = useState('');

  const handleChange = (e) => {
    const newQty = e.target.value;
    const newArray = { ...sessionOrderDetails, Quantity: newQty };
    sessionStorage.setItem('orderDetails', JSON.stringify(newArray));
    setValue(newQty);
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
          value={value}
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
