import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import HeroBox from './features/HeroBox.jsx';
import ViteHomepage from './features/ViteHomepage.jsx';
import Container from '@mui/material/Container';

function App() {
  const [count, setCount] = useState(0);
  const [array, setArray] = useState([]);

  const fetchAPI = async () => {
    const response = await axios.get('http://localhost:3001/api');
    setArray(response.data.fruits);
    console.log(response.data.fruits);
  };

  useEffect(() => {
    fetchAPI();
  },[]);

  return (
    <>
      <div>
          <HeroBox/>
          <ViteHomepage/>
      </div>
    </>
  )
}

export default App
