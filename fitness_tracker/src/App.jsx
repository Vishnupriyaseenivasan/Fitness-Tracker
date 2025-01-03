import React, { Component } from 'react';
import Dashboard from './Components/Dashboard';
import Login from './Login';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div>
      
    <Router>
      <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/Dashboard' element={<Dashboard/>} />
      </Routes>
    </Router>
     
    </div>
  );
}

export default App;
