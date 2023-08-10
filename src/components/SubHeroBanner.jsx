import React from 'react'
import './Subherobanner.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init()

const HeroBanner = (props) => {
  return (
    <div className='herobanner' data-aos="fade-down" data-aos-delay="200">
      <div className="left">
        {/* <div className="layout bo"> */}
            <div className="content">
              {props.BannerContent}
            </div>
            <div className="contactUs">
              {props.BannerName}
            </div>
        {/* </div> */}
      </div>
      <div className="right">
        <img className='contactimg' src={props.BannerImg} alt="" />
      </div>
    </div>
  )
}

export default HeroBanner
