import { useState, useEffect, useContext } from 'react';
import { OrderContext } from '../contexts/OrderContext';
import Button from '@mui/material/Button';
import { Alert, AlertTitle } from '@mui/material'
import { Form, Link } from 'react-router';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import QuantitySelect from './QuantitySelect';


export default function ProductSelectForm() {
  
    const { orderType, setOrderType, orderQuantity, setOrderQuantity } = useContext(OrderContext);

    const [ selectedOption, setSelectedOption ] = useState(orderType)

    const handleRadioSelect = (e) => {
      const value = e.target.value;
      setOrderType(value);
      setSelectedOption(value);
    };

  const [ showAlert, setShowAlert ] = useState(false)

    const handleSubmit = (event) => {
      if (!orderType || !orderQuantity) {
        event.preventDefault()
        setShowAlert(true);
      }
    };

  useEffect( () => {
  }, [orderType]);
    

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
            onChange={handleRadioSelect}
        />
        <FormControlLabel 
            value="productKeychains" 
            control={<Radio />} 
            label="Keychains" 
            checked={selectedOption == 'productKeychains' } 
            onChange={handleRadioSelect} 
        />
        <FormControlLabel 
            value="productPinbacks" 
            control={<Radio />} 
            label="Pinback Buttons" 
            checked={selectedOption == 'productPinbacks' } 
            onChange={handleRadioSelect} 
        />
      </RadioGroup>
        <QuantitySelect />
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
        {showAlert && (
          <Alert
            severity='warning'
            onClose={() => setShowAlert(false)}
          >
            <AlertTitle>Please select both item and quantity.</AlertTitle>
          </Alert>
        )}
    </FormControl>
  );
}
