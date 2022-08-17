import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './layouts/admin/profile/Profile';
import Dashboard from './layouts/admin/dashboard/Dashboard'
import Resto from './layouts/frontend/Resto'
 

function App(props) {
  return (
   <Router>
      <Routes> 


        <Route path="admin" element={<Dashboard/>} />
        <Route path="admin/profile" element={<Profile/>} />
      
        <Route path="/" element={<Resto/>} />



      </Routes>
    </Router>
  );
}


export default App;
