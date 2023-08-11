import React from 'react'
import './Oddpage.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init()

function OddPage(props) {
    return (
        <div>
            <div className="Odd ">
                <div className="fake">
                <div className="Oleft" data-aos="fade-up">
                    <img src={props.Img} alt="" className="OImg" />
                </div>
                <div className="Oright" data-aos="fade-up" data-aos-delay="300">
                    <div className="ahead">{props.Heading}</div>
                    <div className="OContent">{props.Content}</div>
                </div>

                </div>
            </div>
        </div>
    )
}

export default OddPage
