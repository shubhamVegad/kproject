import React from 'react'
import './Subherobanner.scss'

const HeroBanner = (props) => {
  return (
    <div className='herobanner'>
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
