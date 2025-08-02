import { useState, useEffect } from 'react';
import { useSessionStorageState } from '@toolpad/core/useSessionStorageState';
import Button from '@mui/material/Button';
import { Form, Link } from 'react-router';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import QuantitySelect from './QuantitySelect';


export default function ProductSelectForm( { onRadioChange } ) {
  
  const sessionOrderOptions = JSON.parse(sessionStorage.getItem('orderOptions'));

  const sessionOrderType = () => {
    if (sessionOrderOptions && sessionOrderOptions.Type) {
      return sessionOrderOptions.Type
    }
    else return "productMagnets";
  }

  const sessionQuantity = () => {
    if (sessionOrderOptions && sessionOrderOptions.Quantity) {
      return sessionOrderOptions.Quantity
  }}

    const [ selectedOption, setSelectedOption ] = useState(sessionOrderType)
    const handleSelect = (e) => {
        setSelectedOption(e.target.value);
        onRadioChange(e.target.value);
    };

    const [ qty, setQty ] = useState(sessionQuantity);
    const handleQty = (value) => {
      setQty(value);
    };

    const [ submitData, setSubmitData ] = useState([]);
    const handleSubmit = () => {
      const newArray = [ selectedOption, qty ];
      setSubmitData(newArray);
    };

    useEffect( () => {
      const orderOptions = {
        Type: selectedOption,
        Quantity: qty
      };
      sessionStorage.setItem('orderOptions', JSON.stringify(orderOptions));
    });
    

  return (
    <FormControl sx={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'start',
            p:2
        }}>
      <FormLabel id="products-radio-options">
        Select Product Type
        </FormLabel>
      <RadioGroup
        aria-labelledby="products-radio-options"
        name="radio-buttons-group"
        required
        value={selectedOption}
      >
        <FormControlLabel 
            value="productMagnets" 
            control={<Radio />} 
            label="Magnets" 
            checked={selectedOption == 'productMagnets' } 
            onChange={handleSelect}
        />
        <FormControlLabel 
            value="productKeychains" 
            control={<Radio />} 
            label="Keychains" 
            checked={selectedOption == 'productKeychains' } 
            onChange={handleSelect} 
        />
        <FormControlLabel 
            value="productPinbacks" 
            control={<Radio />} 
            label="Pinback Buttons" 
            checked={selectedOption == 'productPinbacks' } 
            onChange={handleSelect} 
        />
      </RadioGroup>
        <QuantitySelect qtyCallback={handleQty} />
        <Link to="/Images">
          <Button 
            type="submit" 
            onClick={handleSubmit} 
            variant='contained' 

            sx={{
              m:1,
              color:'black',
              backgroundColor:'#E49999'
          }}>
              Continue
          </Button>
        </Link>
    </FormControl>
  );
}
