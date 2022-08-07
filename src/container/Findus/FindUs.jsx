import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Bonifacio High Street, 9th Avenue, Bonifacio Global City, Taguig City</p>
        <p className="p__opensans">Greenbelt, San Lorenzo, Makati City</p>
        <p className="p__opensans">SM Mall of Asia, Mall of Asia Complex (MOA), Pasay City</p>
        <p className="p__opensans">SM Megamall, Ortigas, Mandaluyong City</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Mon - Thu: 11:00 am - 09:00 pm</p>
        <p className="p__opensans">Fri - Sun: 10:00 am - 11:00 pm</p>
      </div>
      <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Call Us</p>
      <p className="p__opensans">+63277539892</p>
      <p className="p__opensans">+639176247912</p>
      <p className="p__opensans">+639565479678</p>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;