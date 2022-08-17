import React from 'react';
import  Navbar  from './navbar/Navbar';
import  AboutUs  from '../frontend/container/AboutUs/AboutUs';
import  FindUs  from '../frontend/container/Findus/FindUs';
import  Footer  from '../frontend/container/Footer/Footer';
import  Header  from '../frontend/container/Header/Header';
import  SpecialMenu  from '../frontend/container/Menu/SpecialMenu';
import '../../App.css';


const Resto = () => {
    return ( <div>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <FindUs />
      <Footer />
      </div>
    );
}

export default Resto;