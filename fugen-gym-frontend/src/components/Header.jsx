import React, { useState, useEffect } from 'react';
import Logo from '../assets/logo.png';
import Bars from '../assets/bars.png';
import { Link } from 'react-scroll';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Update isMobile state on window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="bg-gray-900 text-white p-4 md:px-16 lg:px-24 flex justify-between items-center">
      {/* Logo */}
      <img src={Logo} alt="Logo" className="w-24 md:w-32 cursor-pointer" />

      {/* Mobile Menu Toggle */}
      {isMobile ? (
        <div 
          className="cursor-pointer p-2 bg-gray-700 rounded md:hidden"
          onClick={() => setMenuOpened(!menuOpened)}
        >
          <img src={Bars} alt="Menu" className="w-6 h-6" />
        </div>
      ) : null}

      {/* Navigation Links */}
      <ul className={`md:flex gap-8 items-center transition-all duration-300 
                      ${menuOpened ? 'flex flex-col absolute top-16 left-0 w-full bg-gray-800 py-8' : 'hidden md:flex'}`}>
        <li>
          <Link
            onClick={() => setMenuOpened(false)}
            activeClass="active"
            to="home"
            smooth={true}
            className="cursor-pointer hover:text-orange-500 transition"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setMenuOpened(false)}
            to="programs"
            smooth={true}
            className="cursor-pointer hover:text-orange-500 transition"
          >
            Programs
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setMenuOpened(false)}
            to="reasons"
            smooth={true}
            className="cursor-pointer hover:text-orange-500 transition"
          >
            Why Us
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setMenuOpened(false)}
            to="plans"
            smooth={true}
            className="cursor-pointer hover:text-orange-500 transition"
          >
            Plans
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setMenuOpened(false)}
            to="testimonials"
            smooth={true}
            className="cursor-pointer hover:text-orange-500 transition"
          >
            Testimonials
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
