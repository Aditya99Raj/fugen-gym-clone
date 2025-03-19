import React from 'react';
import Github from '../assets/github.png';
import Instagram from '../assets/instagram.png';
import LinkedIn from '../assets/linkedin.png';
import Logo from '../assets/logo.png';

const Footer = () => {
  return (
    <div className="bg-gray-700 text-white py-10 px-5 md:px-16 lg:px-24">
      <hr className="border-t border-gray-600 mb-8" />

      <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Social Links */}
        <div className="flex space-x-4">
          <img src={Github} alt="Github" className="w-8 h-8 cursor-pointer hover:scale-110 transition duration-300" />
          <img src={Instagram} alt="Instagram" className="w-8 h-8 cursor-pointer hover:scale-110 transition duration-300" />
          <img src={LinkedIn} alt="LinkedIn" className="w-8 h-8 cursor-pointer hover:scale-110 transition duration-300" />
        </div>
        <div>
          <img src={Logo} alt="Logo" className="w-20 md:w-28 h-auto" />
        </div>
      </div>

      <div className="absolute -z-10 top-0 left-1/4 w-52 h-52 md:w-64 md:h-64 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute -z-10 bottom-0 right-1/4 w-52 h-52 md:w-64 md:h-64 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
    </div>
  );
};

export default Footer;
