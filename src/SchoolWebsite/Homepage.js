import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import AboutUs from './Aboutus';
import EducationAndDevelopmentProgram from './Education';
import FooterWithLogo from './Footer';
import Gallery from './Gallery';
import AboutUsPage from './Aboutuspage';
import AdmissionForm from './Information';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdmissionProcess from './Information';
import ContactUs from './Contactus';
import Home from './Home';

function Homepage() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/aboutuspage" element={<AboutUsPage />} />
          <Route path="/admission" element={<AdmissionProcess />} />
          <Route path="/Contact-us" element={<ContactUs />} />
          </Routes>
         <FooterWithLogo/>
      </Router>
    </div>
  );
}

export default Homepage;
