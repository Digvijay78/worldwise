import {  BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Homapage from './pages/Homapage'
import Pricing from './pages/Pricing'
import Product from './pages/Product'
import PageNotFound from './pages/PageNotFound'
import NavPage from './component/NavPage'
import AppLayout from './pages/AppLayout'

function App() {
  

  return (
    <>
    
      <BrowserRouter>

       <Routes>
        <Route  path = "/" element = {<Homapage />}  />
        <Route  path = "/product" element = {<Product />}  />
        <Route  path = "/pricing" element = {<Pricing />}  />
        <Route  path = "/app" element = {<AppLayout />}  />
        <Route  path = "*" element = {<PageNotFound />}  />

      </Routes>   
       

      </BrowserRouter>
    
        
    </>
  )
}

export default App
