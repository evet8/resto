import React, { useState } from 'react';
import {GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
// import { Link } from 'react-router-dom';

import images from '../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.pound} alt="app logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a className="text-decoration-none link-light" href="#home">Home</a></li>
        <li className="p__opensans"><a className="text-decoration-none link-light" href="#about">About</a></li>
        <li className="p__opensans"><a className="text-decoration-none link-light" href="#menu">Menu</a></li>
        <li className="p__opensans"><a className="text-decoration-none link-light" href="#contact">Contact</a></li>
      </ul>
      {/* <div className="app__navbar-login">
        <a to="#login" className="p__opensans">Log In / Register</a>
        <div />
        <a to="/" className="p__opensans">Book Table</a>
      </div> */}
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)}/>
        
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans"><a className="text-decoration-none link-light" href="#home">Home</a></li>
              <li className="p__opensans"><a className="text-decoration-none link-light" href="#about">About</a></li>
              <li className="p__opensans"><a className="text-decoration-none link-light" href="#menu">Menu</a></li>
              <li className="p__opensans"><a className="text-decoration-none link-light" href="#contact">Contact</a></li>
            </ul>
          </div>
        )}
      
      </div>
    </nav>
  )
}

export default Navbar;
