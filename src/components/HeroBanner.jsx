import React from 'react'
import './herobanner.scss'
import Button from '@mui/material/Button';
import heroimg from '../assets/heroimg.png'
import { useNavigate } from 'react-router-dom';

const HeroBanner = () => {

  // const navigate = useNavigate();

  const handleWhatsAppClick = () => {
    // Replace '1234567890' with the phone number you want to chat with
    const phoneNumber = '8866140959';
    const whatsappURL = `https://wa.me/${phoneNumber}`;

    // Open WhatsApp in a new tab
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className='herobanner '>
      <div className="hbleft  ">
        <div className="hbcontainer  ">
        <div className="fl ">We are ready to serve</div> 
        <div className="sl ">Web Development</div>
        <div className="tl">to grow your business</div>
        <Button onClick={handleWhatsAppClick} className='herobtn' variant="contained"
        //  onClick={() => navigate("/contactus")} 
         >Let's Get Connect</Button>
        </div>
      </div>
      <div className="hbright ">
        <img className='heroimg ' src={heroimg} alt="" />
      </div>
    </div>
  )
}

export default HeroBanner
