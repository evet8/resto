import React from 'react';
import { FiFacebook, FiInstagram } from 'react-icons/fi';

import   FooterOverlay  from '../../footer/FooterOverlay';
import   Newsletter  from '../../newsletter/Newsletter';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiInstagram />
        </div>

    <div className="footer__copyright">
      <p className="p__opensans">2022 2GE. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;