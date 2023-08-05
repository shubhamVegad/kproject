import React from 'react'
import './Oddpage.scss'

function OddPage(props) {
    return (
        <div>
            <div className="Odd ">
                <div className="Oleft">
                    <img src={props.Img} alt="" className="OImg" />
                </div>
                <div className="Oright">
                    <div className="ahead">{props.Heading}</div>
                    <div className="OContent">{props.Content}</div>
                </div>
            </div>
        </div>
    )
}

export default OddPage
