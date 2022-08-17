import React from 'react';
// import {Routes, Route, Navigate} from 'react-router-dom';
import './admin/css/styles.css';
import './admin/js/scripts';

import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import Footer from '../Footer';

// import routes from '../../routes/routes'

const Dashboard = () => {
    return (
      <div className="sb-nav-fixed">
          <Navbar />
          <div id="layoutSidenav">

            <div id="layoutSidenav_nav">
                <Sidebar />
            </div>

            <div id="layoutSidenav_content">
                <main>
                  
 dashboard
                </main>
                <Footer />
            </div>

          </div>
      </div>
    );
}

export default Dashboard;