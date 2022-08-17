import React from 'react';

import { AboutUs, FindUs, Footer, Header, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <FindUs />
    <Footer />
  </div>
);

export default App;
