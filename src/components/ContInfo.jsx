import React from 'react'
import { BsFillTelephoneFill } from "react-icons/Bs";
import { GrMail } from "react-icons/Gr";
import { HiLocationMarker } from "react-icons/hi";
import { IconContext } from "react-icons";
import { Button } from '@mui/material';
import './ContInfo.scss'
import { useForm, ValidationError } from '@formspree/react';


function ContInfo() {

  const [state, handleSubmit] = useForm("mknloeoa");
  if (state.succeeded) {
    return <div className="thanks">
      <div>Thanks For Joining!</div>
    </div> 
  }

  const scrollToThanks = () => {
    window.scrollTo({
      top: 600,
      behavior: 'smooth', // Optional: Adds smooth scrolling animation
    // behavior: 'instant'
    });
  };

  return (
    <>
      <div className="ContactInfo">
        <div className="leftInfo">
          <IconContext.Provider value={{ className: "react-icons" }}>
            <div className="Cbox " id='Cinfo'>
              Contact Information
            </div>
            <div className="Cbox">
              <div className="CphNoimg"><BsFillTelephoneFill /></div>
              <div className="PNumber">+91 99889 55441</div>
            </div>
            <div className="Cbox">
              <div className="CEmailimg"><GrMail /></div>
              <div className="CMail">info@kessitech.com</div>
            </div>
            <div className="Cbox">
              <div className="CAddimg"><HiLocationMarker /></div>
              <div className="CAddresh">2972 Westheimer Rd. Santa Ana,Illinois 85486 </div>
            </div>
          </IconContext.Provider>
        </div>
        <div className="rightInfo">


          <form onSubmit={handleSubmit}>



            <div className="Cname cbox2">
              <div><label htmlFor="name">
                Name
              </label></div>
              <input type="text" name='name' id="name" />
            </div>

            <div className="Cmail cbox2">
              <div><label htmlFor="email">
                Email
              </label></div>
              <input
                id="email"
                type="email"
                name="email"
              />
            </div>

            <div className="CMsg cbox2">
              <div>Message</div>
              <textarea name="Message" id="message"></textarea>
            </div>

            <div className="CSubmitBtn cbox2">
              <Button className='fbtn csbtn' type='submit' variant="contained" disabled={state.submitting} onClick={scrollToThanks}>Send Message</Button>
            </div>

          </form>
          {/* <button onClick={scrollToThanks}>button</button> */}

          {/* <form onSubmit={handleSubmit}>
            <label htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <textarea
              id="message"
              name="message"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
              Submit
            </button>
          </form> */}

        </div>
      </div>
    </>
  )
}

export default ContInfo

