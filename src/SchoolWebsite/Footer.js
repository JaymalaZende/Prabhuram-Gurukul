import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './Logo1.png';

export function FooterWithLogo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <footer className="w-full bg-gray-950 p-8">
      <div className="flex flex-row flex-wrap items-center justify-center md:justify-between gap-y-6 gap-x-12 bg-gradient-to-l text-center">
        <img src={logo} alt="logo" className="w-32 h-32" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link to="/aboutuspage" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">About Us</Link>
            <Link to="/" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Home</Link>
            <Link to="/admission" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Information</Link>
            <Link to="/contact-us" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Contact Us</Link>
            <Link to="/news" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">News</Link>
          </div>
        </ul>
        <button 
          className="md:hidden text-white px-3 py-2 rounded-md" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Close Menu" : "Open Menu"}
        </button>
      </div>
      {isOpen && (
        <div className="flex flex-col space-y-4 md:hidden mt-4">
          <Link to="/" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Home</Link>
          <Link to="/about-us" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">About Us</Link>
          <Link to="/admission" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Information</Link>
          <Link to="/contact-us" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Contact Us</Link>
          <Link to="/news" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">News</Link>
        </div>
      )}
      <hr className="my-8 border-gray-200" />
      <p className="text-center font-normal text-white">&copy; 2023 Material Tailwind</p>
    </footer>
  );
}

export default FooterWithLogo;
