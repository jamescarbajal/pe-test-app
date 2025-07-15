import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


export default function RadioButtons() {
    
    const [ imageValue, setImageValue ] = useState('');

    function handleExampleImage(e) {
        setImageValue(e.target.value);
    };


  return (
    <FormControl sx={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'start',

        }}>
      <FormLabel id="demo-radio-buttons-group-label"
        sx={{
                mb:3
            }}>
        Product Type
        </FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
      >
        <FormControlLabel value="productKeychain" control={<Radio />} label="Kechains" onChange={handleExampleImage} />
        <FormControlLabel value="productMagnets" control={<Radio />} label="Magnets" onChange={handleExampleImage} />
        <FormControlLabel value="productPinbacks" control={<Radio />} label="Pinback Buttons" onChange={handleExampleImage} />
      </RadioGroup>
    </FormControl>
  );
}
