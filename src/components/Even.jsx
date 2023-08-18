import React from 'react'
import './even.scss';
import marketing from '../assets/Marketing.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init()

const Even = (props) => {
    return (
        <div className='even '>
            <div className="efake">
            <div className="evenleft" data-aos="fade-up" data-aos-delay="300">
                <div className="ahead">{props.heading}</div>
                <div className="acon">{props.content}</div>
            </div>
            <div className="evenright " data-aos="fade-up" >
                <img src={props.img} alt="" className="erimg " />
            </div>

            </div>
        </div>
    )
}

export default Even
