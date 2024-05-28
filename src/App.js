import React from 'react';
import './App.css';

import Homepage from './SchoolWebsite/Homepage';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import AboutUs from './SchoolWebsite/Aboutus';
import Navbar from './SchoolWebsite/Navbar';
import Contactus from './SchoolWebsite/Contactus';


function App() {
  return (
      <div className="App">
      <Homepage />
    </div>
  );
}
export default App;
