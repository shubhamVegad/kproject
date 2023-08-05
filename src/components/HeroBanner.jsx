import React from 'react'
import './herobanner.scss'
import Button from '@mui/material/Button';
import heroimg from '../assets/heroimg.png'
import { useNavigate } from 'react-router-dom';

const HeroBanner = () => {

  // const navigate = useNavigate();

  return (
    <div className='herobanner '>
      <div className="left ">
        <div className="container ">
        <div className="fl">We are ready to serve</div> 
        <div className="sl">Web Development</div>
        <div className="tl">to grow your business</div>
        <Button className='herobtn' variant="contained"
        //  onClick={() => navigate("/contactus")} 
         >Let's Get Connect</Button>
        </div>
      </div>
      <div className="right">
        <img className='heroimg ' src={heroimg} alt="" />
      </div>
    </div>
  )
}

export default HeroBanner
