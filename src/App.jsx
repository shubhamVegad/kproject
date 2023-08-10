import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import PageNotFound from './pages/PageNotFound';
import Tempnav from './components/Tempnav';
import ContactUs from './pages/ContactUs'
import ITServices from './pages/ITServices'
import Marketing from './pages/Marketing';
import About from './pages/About';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init()



function App() {
  

  return (
    
    <BrowserRouter>
    <Tempnav></Tempnav>
    <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path='/itservice' element={<ITServices/>} />
      <Route path='/marketing' element={<Marketing/>} />
      <Route path='/contactus' element={<ContactUs/>} />
      <Route path='/aboutus' element={<About/>}/>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
    
    
    
  )
}

export default App
