import React, { useState } from 'react'
import './tempnav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/Logo.svg'
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import da from '../assets/down-arrow.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init()



const Tempnav = () => {

    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };



    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
        //   behavior: 'smooth', // Optional: Adds smooth scrolling animation
        behavior: 'instant'
        });
      };


    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const handleOnClick = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <nav className='mainnav'
        //  data-aos="zoom-in" data-aos-once="true" data-aos-duration="700"
         >
            <div className='logo'>
                <img onClick={()=>{navigate("/");scrollToTop()}} src={logo} alt="" />
            </div>
            <ul className="desktop-menu">
                <li className="menuItem" onClick={()=>{navigate("/");scrollToTop()}}>Home</li>
                <li className="menuItem">
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        Services
                        <img id='navarr' src={da} alt="" />
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={()=>{scrollToTop();handleClose();navigate("/itservice")}} >IT Service</MenuItem>
                        <MenuItem onClick={()=>{scrollToTop();handleClose();navigate("/marketing")}}>Marketing Service</MenuItem>
                    </Menu>
                </li>
                <li className="menuItem" onClick={()=>{navigate("/aboutus");scrollToTop()}}>About Us</li>
                <li className="menuItem" id='cbtn'>
                    <Button id='navbtn' variant="contained" onClick={()=>{navigate("/contactus");scrollToTop()}} >Contact Us</Button>
                </li>
            </ul>


            {isMobileMenuOpen ? <FontAwesomeIcon className='mobile-menu-button' icon={faXmark} onClick={handleOnClick} /> : <FontAwesomeIcon className='mobile-menu-button' icon={faBars} onClick={handleOnClick} />}
            {
                isMobileMenuOpen ? <ul className='mobile-menu'>
                    <li className="menuItem" onClick={()=>{handleOnClick();navigate("/");scrollToTop()}}>Home</li>
                    {/* <li className="menuItem" onClick={() => navigate("/")}>Home</li> */}
                    <li className="menuItem">
                        <Button
                            id="basic-button-mobile"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            Services
                            <img id='navarr' src={da} alt="" />
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem 
                            // onClick={handleClose} 
                            onClick={()=>{handleClose();handleOnClick();navigate("/itservice");scrollToTop()}}
                            >IT Service</MenuItem>
                            <MenuItem onClick={()=>{handleClose();handleOnClick();navigate("/marketing");scrollToTop()}}>Marketing Service</MenuItem>
                        </Menu>
                    </li>
                    <li className="menuItem" onClick={()=>{handleOnClick();navigate("/aboutus");scrollToTop()}}>About Us</li>
                    <li className="menuItem" id="cbtn">
                        <Button id='navbtn-mobile' variant="contained" onClick={()=>{handleOnClick();navigate("/contactus");scrollToTop()}} >Contact Us</Button>
                    </li>
                </ul> : ''
            }
        </nav>
    )
}

export default Tempnav