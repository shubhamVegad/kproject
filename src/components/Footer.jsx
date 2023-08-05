import React from 'react'
import './footer.scss'
import { Button } from '@mui/material'
import footlogo from '../assets/footlogo.png'
import { SlSocialInstagram, SlSocialDribbble, SlSocialTwitter, SlSocialYoutube } from 'react-icons/sl'
import {SiLinkedin} from 'react-icons/si'
import { IconContext } from 'react-icons'
import { BiSolidPhoneCall, BiLogoGmail } from 'react-icons/bi'
import { HiLocationMarker } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    //   behavior: 'smooth', // Optional: Adds smooth scrolling animation
    behavior: 'instant'
    });
  };

  
    const navigateToSocialMedia = (url) => {
      window.open(url, '_blank');
    };
  


  

  return (
    <div className='footer'>
      <div className="blue">
        <div className="bluetext">
          <div className="headt">
            We are ready to lead you into the future of digital world.
          </div>
          <div className="normalt">We would love to help you!</div>
        </div>
        <div className="bluebtn">
          <Button className='fbtn' variant="contained" onClick={() => {navigate("/contactus");scrollToTop()}} >Get Started</Button>
        </div>
      </div>
      <div className="black">
        <div className="bempty"></div>
        <div className="bcon">
          <div className="bconmain">
            <div className="flogo">
              <img className='bflimg' src={footlogo} alt="" />
              <IconContext.Provider value={{ className: "fsmicon" }}>
                <div className="fsm">
                  <a href="https://www.instagram.com/kessitech/" target="_blank" rel="noopener noreferrer"><SlSocialInstagram /></a>
                  <a href="https://www.linkedin.com/company/kessi-tech-solutions/" target="_blank" rel="noopener noreferrer"><SiLinkedin /></a>
                  <a href="http://www.instagram.com/kessitech/" target="_blank" rel="noopener noreferrer"><SlSocialYoutube /></a>
                  <a href="http://www.linkedin.com/company/kessi-tech-solutions/" target="_blank" rel="noopener noreferrer"><SlSocialTwitter /></a>
                </div>
              </IconContext.Provider>
            </div>
            <div className="fql">
              <div className="headt">Quick Links</div>
              <div className="normalt normaltlink" onClick={()=>{navigate("/itservice");scrollToTop()}}>IT Services</div>
              <div className="normalt normaltlink" onClick={()=>{navigate("/marketing");scrollToTop()}}>Marketing Services</div>
              <div className="normalt normaltlink" onClick={()=>{navigate("/contactus");scrollToTop()}}>About Us</div>
              <div className="normalt normaltlink" onClick={()=>{navigate("/contactus");scrollToTop()}}>Contact Us</div>
            </div>
            <div className="fcu">
              <div className="headt">Contact Us</div>
              <div className="normalt"> <BiSolidPhoneCall /> +91 99889 55441</div>
              <div className="normalt"> <BiLogoGmail /> info@kessitech.com</div>
              <div className="normalt"> <HiLocationMarker /> 2972 Westheimer Rd. Santa Ana,
                Illinois 85486 </div>


            </div>
          </div>
          <div className="bconline normalt">Copyright © 2023 Kessi Tech Solutions - All Rights Reserved.</div>
        </div>
      </div>

    </div>
  )
}

export default Footer
