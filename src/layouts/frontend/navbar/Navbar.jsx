import React, { useState } from 'react';
import {GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';

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
        <li className="p__opensans"><Link className="text-decoration-none link-light" to="#home">Home</Link></li>
        <li className="p__opensans"><Link className="text-decoration-none link-light" to="#about">About</Link></li>
        <li className="p__opensans"><Link className="text-decoration-none link-light" to="#menu">Menu</Link></li>
        <li className="p__opensans"><Link className="text-decoration-none link-light" to="#contact">Contact</Link></li>
      </ul>
      <div className="app__navbar-login">
        {/* <a to="#login" className="p__opensans">Log In / Register</a>
        <div /> */}
        <a to="/" className="p__opensans">Book Table</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)}/>
        
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans"><Link to="#home">Home</Link></li>
              <li className="p__opensans"><Link to="#about">About</Link></li>
              <li className="p__opensans"><Link to="#menu">Menu</Link></li>
              <li className="p__opensans"><Link to="#contact">Contact</Link></li>
            </ul>
          </div>
        )}
      
      </div>
    </nav>
  )
}

export default Navbar;
