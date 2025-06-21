import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import HeroBox from './features/HeroBox.jsx';
import ViteHomepage from './features/ViteHomepage.jsx';
import Container from '@mui/material/Container';

function App() {


  return (
    <>
      <HeroBox/>
      <ViteHomepage/>
    </>
  )
}

export default App
