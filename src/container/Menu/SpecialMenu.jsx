import React from 'react';

import './SpecialMenu.css';
import { images } from '../../constants';

const SpecialMenu = () => (
    <div className="app__menu" id="menu">
      <div className="app__menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>
    </div>  
);

export default SpecialMenu;
