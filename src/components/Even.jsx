import React from 'react'
import './even.scss';
import marketing from '../assets/Marketing.png'

const Even = () => {
    return (
        <div className='even '>

            <div className="evenleft ">
                <div className="ahead">Search Engine Optimization (SEO)</div>
                <div className="acon">Enhance your website’s organic search visibility with our cutting-edge SEO techniques. Through in-depth keyword research, on-page optimization, and backlink building, we help your website rank higher on search engine results pages (SERPs). By optimizing your website’s content and structure, we enhance user experience and increase organic traffic. Our goal is to elevate your online authority, making you a go-to resource in your industry.</div>
            </div>
            <div className="evenright bo">
                <img src={marketing} alt="" className="erimg bo" />
            </div>
        </div>
    )
}

export default Even
