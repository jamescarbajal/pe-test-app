import './App.css';
import { Route, Routes } from 'react-router';
import Layout from './pages/Layout.jsx'
import Landing from './pages/Landing.jsx'
import Order from './pages/Order.jsx'
import About from './pages/About.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import ImageUpload from './pages/ImageUpload.jsx'


function App() {


  return (
    <>
        <Routes>
          <Route element={ <Layout/> }>
            <Route path='*' element={ <PageNotFound/>} />
            <Route index element={ <Landing/> } />
            <Route path="About" element={ <About/> } />
            <Route path="Order" element={ <Order/> } />
            <Route path="Images" element={ <ImageUpload/> } />
          </Route>
        </Routes>
    </>
  )
}

export default App
