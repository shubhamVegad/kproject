import React from 'react'
import './footer.scss'
import { Button } from '@mui/material'
import footlogo from '../assets/footlogo.png'
import { SlSocialInstagram, SlSocialDribbble, SlSocialTwitter, SlSocialYoutube } from 'react-icons/sl'
import { IconContext } from 'react-icons'
import { BiSolidPhoneCall, BiLogoGmail } from 'react-icons/bi'
import { HiLocationMarker } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

  const navigate = useNavigate();

  return (
    <div className='footer'>
      <div className="blue">
        <div className="bluetext">
          <div className="headt">
            We are ready to lead you into the future of digital world.
          </div>
          <div className="normalt">We had love to help you!</div>
        </div>
        <div className="bluebtn">
          <Button className='fbtn' variant="contained" onClick={() => navigate("/contactus")} >Get Statred</Button>
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
                  <SlSocialInstagram />
                  <SlSocialDribbble />
                  <SlSocialTwitter />
                  <SlSocialYoutube />
                </div>
              </IconContext.Provider>
            </div>
            <div className="fql">
              <div className="headt">Quick Links</div>
              <div className="normalt">IT Services</div>
              <div className="normalt">Marketing Services</div>
              <div className="normalt">About Us</div>
              <div className="normalt">Contact Us</div>
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
