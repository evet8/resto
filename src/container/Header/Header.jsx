import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper__info">
      <SubHeading title="Chase the new flavor" />
      <h1 className="app__header-h1">Satisfy your cravings today!</h1>
      <p className="p__opensans" style={{ margin: '2rem 0'}}>POUND is home to affordable luxurious burgers in the metro.</p>
      <button type="button" className="custom__button">Book a Table</button>
    </div>

    <div className="app__header-img">
      <img src={images.burger} alt="header img" />

    </div>
  </div>
);

export default Header;
