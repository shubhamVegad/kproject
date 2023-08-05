import React from 'react'
import logo from '../assets/Logo.png'
// import './navbar.scss'

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import da from '../assets/down-arrow.svg'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {


  const navigate = useNavigate();
  
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  

  return (

    <div className='nav '>
      <div className="logo">
        <img onClick={() => navigate("/")} src={logo} alt="" />
      </div>
      <ul className="menuItems">
        <li className="menuItem" onClick={() => navigate("/")}>Home</li>
        <li className="menuItem">
        <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Service
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
        <MenuItem onClick={handleClose} >IT Service</MenuItem>
        <MenuItem onClick={handleClose}>Marketing Service</MenuItem>
      </Menu>
        </li>
        <li className="menuItem" onClick={() => navigate("/aboutus")}>About Us</li>
        <li className="menuItem"> 
        <Button id='navbtn' variant="contained" onClick={() => navigate("/contactus")} >Contact Us</Button>
         </li>
        <li className="menuItem">
        </li>
      </ul>

    </div>

  );
};

export default Navbar;

