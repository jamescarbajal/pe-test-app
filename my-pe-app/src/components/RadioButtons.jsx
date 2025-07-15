import { useState, useEffect } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


export default function RadioButtons( {radioValue} ) {
    
    const [ selectedOption, setSelectedOption ] = useState('productMagnets')

    function handleSelect(e) {
        setSelectedOption(e.target.value)
    };

    useEffect( () => {
        radioValue(selectedOption);
        console.log('Selected product type is ' + selectedOption);
    }, [ selectedOption ] )

  return (
    <FormControl sx={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'start',

        }}>
      <FormLabel id="products-radio-options"
        sx={{
                mb:3
            }}>
        Product Type
        </FormLabel>
      <RadioGroup
        aria-labelledby="products-radio-options"
        name="radio-buttons-group"
        defaultValue="productMagnets"
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
    </FormControl>
  );
}
