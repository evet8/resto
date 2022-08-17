import React from 'react';
import '../profile/admin/css/styles.css';
import '../profile/admin/js/scripts';

import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import Footer from '../Footer';

import routes from '../../routes/routes'

const Reservations = () => {
    return (
      <div className="sb-nav-fixed">
          <Navbar />
          <div id="layoutSidenav">

            <div id="layoutSidenav_nav">
                <Sidebar />
            </div>

            <div id="layoutSidenav_content">
                <main>
                  
 reservations
                </main>
                <Footer />
            </div>

          </div>
      </div>
    );
}

export default Reservations;