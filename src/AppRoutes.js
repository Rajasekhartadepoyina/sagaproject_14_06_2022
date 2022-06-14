import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';



const AppRoutes = () => {
    return (
  <Router>
   
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    
  </Router>
  )
};

export default AppRoutes;