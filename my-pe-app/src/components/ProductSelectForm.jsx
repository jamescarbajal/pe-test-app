import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import QuantitySelect from './QuantitySelect';


export default function ProductSelectForm( { onRadioChange } ) {
    
    const [ selectedOption, setSelectedOption ] = useState('productMagnets')
    const handleSelect = (e) => {
        setSelectedOption(e.target.value);
        onRadioChange(e.target.value);
    };

    const [ qty, setQty ] = useState(0);
    const handleQty = (value) => {
      setQty(value);
    };

    const [ submitData, setSubmitData ] = useState([]);
    const handleSubmit = () => {
      const newArray = [ selectedOption, qty ];
      setSubmitData(newArray);
    };

    useEffect( () => {
      console.log('SUBMIT DATA\nProduct Type: '+ submitData[0] + '\nQuantity: ' + submitData[1]);
    }, [ submitData ] );
    

  return (
    <FormControl sx={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'start',
            p:2
        }}>
      <FormLabel id="products-radio-options"
        sx={{
                mb:3
            }}>
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
    </FormControl>
  );
}
