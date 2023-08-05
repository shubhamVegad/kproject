import React from 'react'
import './even.scss';
import marketing from '../assets/Marketing.png'

const Even = (props) => {
    return (
        <div className='even '>

            <div className="evenleft ">
                <div className="ahead">{props.heading}</div>
                <div className="acon">{props.content}</div>
            </div>
            <div className="evenright ">
                <img src={props.img} alt="" className="erimg " />
            </div>
        </div>
    )
}

export default Even
