import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import { ImagesProvider } from './contexts/ImagesContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(

      <ImagesProvider>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </ImagesProvider>

)