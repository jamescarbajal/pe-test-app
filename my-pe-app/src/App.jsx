import { useState, useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import { ReactRouterAppProvider } from '@toolpad/core/react-router';
import Layout from './pages/Layout.jsx'
import Landing from './pages/Landing.jsx'
import Order from './pages/Order.jsx'
import About from './pages/About.jsx'
import PageNotFound from './pages/PageNotFound.jsx'

function App() {


  return (
    <>
    <ReactRouterAppProvider style={{ all:'unset' }}>
        <Routes>
          <Route element={ <Layout/> }>
            <Route path='*' element={ <PageNotFound/>} />
            <Route index element={ <Landing/> } />
            <Route path="About" element={ <About/> } />
            <Route path="Order" element={ <Order/> } />
          </Route>
        </Routes>
      </ReactRouterAppProvider>
    </>
  )
}

export default App
