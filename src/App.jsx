import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import HeroBanner from './components/HeroBanner';
import Landing from './pages/Landing';
import PageNotFound from './pages/PageNotFound';
import Even from './components/Even';
import Tempnav from './components/Tempnav';



function App() {
  

  return (
    
    // <Even></Even>
    // {/* <Navbar></Navbar> */}
    <BrowserRouter>
    <Tempnav></Tempnav>
    <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path='/itservice' element={<PageNotFound/>} />
      <Route path='/marketing' element={<PageNotFound/>} />
      <Route path='/contactus' element={<PageNotFound/>} />
      <Route path='/aboutus' element={<PageNotFound/>}/>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
    
    
    
  )
}

export default App
