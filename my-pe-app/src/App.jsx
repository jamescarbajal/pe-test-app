import { useState, useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import Layout from './pages/Layout.jsx'
import Landing from './pages/Landing.jsx'
import axios from 'axios';
import HeroBox from './components/HeroBox.jsx';
import ViteHomePage from './components/ViteHomePage.jsx';
import NavBar from './components/NavBar.jsx';

function App() {


  return (
    <>
      <Routes>
        <Route element={ <Layout/> }>
          <Route index element={ <Landing/> } />
        </Route>
      </Routes>
    </>
  )
}

export default App
