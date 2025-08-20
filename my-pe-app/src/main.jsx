import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import { ImagesProvider } from './contexts/ImagesContext.jsx'
import { OrderProvider } from './contexts/OrderContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(

    <OrderProvider>
      <ImagesProvider>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </ImagesProvider>
    </OrderProvider>

)