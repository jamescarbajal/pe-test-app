import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import HeroBox from './features/HeroBox.jsx';
import ViteHomepage from './features/ViteHomepage.jsx';
import NavBar from './components/NavBar.jsx';

function App() {


  return (
    <>
      <NavBar/>
      <HeroBox/>
      <ViteHomepage/>
    </>
  )
}

export default App
