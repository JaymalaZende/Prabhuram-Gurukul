import React from 'react';
import './App.css';

import Homepage from './SchoolWebsite/Homepage';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import Contactus from './SchoolWebsite/Contactus';


function App() {
  return (
      <div className="App">
      <Homepage />
    </div>
  );
}
export default App;
