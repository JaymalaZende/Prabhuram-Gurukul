import React from 'react';
import { IoIosCall, IoIosMail } from "react-icons/io";
import { HiLocationMarker } from "react-icons/hi";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gray-200 font-sans dark:bg-gray-900 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo and Description */}
          <div className="flex flex-col">
            <div className="mb-4">
              <img
                className="h-24 object-scale-down"
                src={require('./Logo1.png')} // Ensure the path to your logo is correct
                alt="Logo"
              />
            </div>
            <p className="text-sm text-black dark:text-white font-sans mt-2">
              Parbhuram Gurukul is committed to creating a nurturing and holistic educational environment that promotes intellectual growth, cultural appreciation, personal development, and overall well-being of students.
            </p>
          </div>
          
          {/* Connect With Us */}
          <div className="flex flex-col">
            <p className="font-semibold text-gray-800 dark:text-white mb-4">Connect With Us</p>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <div className="bg-[#7B553C] h-8 w-8 rounded-full flex justify-center items-center mr-3">
                  <IoIosCall size={15} color="white" />
                </div>
                <div>
                  <p className="text-[#7B553C] font-sans text-sm font-semibold mb-1">Call Us</p>
                  <p className="text-gray-800 dark:text-gray-300 text-sm font-sans">+91 8408863840</p>
                  <p className="text-gray-800 dark:text-gray-300 text-sm font-sans">+91 840894840</p>
                  <p className="text-gray-800 dark:text-gray-300 text-sm font-sans">+91 8007132800</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-[#7B553C] h-8 w-8 rounded-full flex justify-center items-center mr-3">
                  <IoIosMail size={15} color="white" />
                </div>
                <div>
                  <p className="text-[#7B553C] font-sans text-sm font-semibold mb-1">Mail Us</p>
                  <p className="text-gray-800 dark:text-gray-300 text-sm font-sans">svatol@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-col">
            <p className="font-semibold text-gray-800 dark:text-white mb-4">Quick Links</p>
            <div className="flex flex-col space-y-2">
              <a href="/" onClick={scrollToTop} className="text-gray-600 dark:text-gray-300 transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500 dark:hover:text-blue-400">Home</a>
              <a href="/aboutuspage" onClick={scrollToTop} className="text-gray-600 dark:text-gray-300 transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500 dark:hover:text-blue-400">About Us</a>
              <a href="/admission" onClick={scrollToTop} className="text-gray-600 dark:text-gray-300 transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500 dark:hover:text-blue-400">Admission</a>
            </div>
          </div>
          
          {/* Visit Us */}
          <div className="flex flex-col">
            <p className="font-semibold text-gray-800 dark:text-white mb-4">Visit Us</p>
            <div className="flex items-center">
              <div className="bg-[#7B553C] h-8 w-8 rounded-full flex justify-center items-center mr-3">
                <HiLocationMarker size={15} color="white" />
              </div>
              <div>
                <p className="text-gray-800 dark:text-gray-300 text-sm font-sans">
                  PRABHURAM GURUKUL<br />
                  B/2, Sai Darshan Row Bunglow,<br />
                  Prashant Nagar, Near Vakratund Hospital,<br/>
                  Pathardi Phata, Nashik 422010
                </p>
              </div>
            </div>
            <div className="flex gap-4 mt-4 ml-auto">
              {/* Social media icons */}
              <img src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg" width="30" height="30" alt="Facebook" />
              <img src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg" width="30" height="30" alt="Twitter" />
              <img src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" width="30" height="30" alt="Instagram" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Divider */}
      <hr className="my-6 border-gray-200 dark:border-gray-700" />
      
      {/* Copyright */}
      <div className="bg-[#7B553C] h-16 flex items-center justify-center">
        <p className="font-sans text-[#FFF6E7] text-center text-md">© {new Date().getFullYear()} Your Company Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
