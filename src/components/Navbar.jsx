import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import '../index.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#F5EBDC] px-6 py-4 shadow-md">
      <div className="flex justify-between items-center">
        <img src={logo} alt="Logo" className="h-10" />

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <ul className="hidden md:flex gap-6 text-lg font-medium text-gray-700">
          <li><Link to="/" className="hover:text-red-500 transition-colors">Home</Link></li>
          <li><Link to="/about" className="hover:text-red-500 transition-colors">About</Link></li>
          <li><Link to="/menu" className="hover:text-red-500 transition-colors">Menu</Link></li>
          <li><Link to="/wishlist" className="hover:text-red-500 transition-colors">Wishlist</Link></li>
          <li><Link to="/cart" className="hover:text-red-500 transition-colors">Cart</Link></li>
          <li><Link to="/contact" className="hover:text-red-500 transition-colors">Contact</Link></li>
        </ul>
      </div>

      {isOpen && (
        <ul className="md:hidden mt-4 flex flex-col gap-4 text-center text-lg font-medium text-gray-700">
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/menu" onClick={() => setIsOpen(false)}>Menu</Link></li>
          <li><Link to="/wishlist" onClick={() => setIsOpen(false)}>Wishlist</Link></li>
          <li><Link to="/cart" onClick={() => setIsOpen(false)}>Cart</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
