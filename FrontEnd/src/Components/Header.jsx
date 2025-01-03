import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
  return (
    <header className="bg-blue-950 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-around px-4 py-2">
        {/* Logo */}
        <div className="text-xl font-bold">
          <NavLink to={"/"} className="hover:text-blue-400">
            <img src="./logo.png" alt="logo"  className='w-32'/>
          </NavLink>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <NavLink
            to={"/all-data"}
            className="hover:text-blue-400 transition duration-300"
          >
          <p className='text-xl'>  All Data</p>
          </NavLink>
          <NavLink
            to={"/registration-form"}
            className="hover:text-red-400 transition duration-300"
          >
            <p className='text-xl'>  Registration Form</p>
          </NavLink>
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            aria-label="Toggle Menu"
            onClick={() => {
              const menu = document.getElementById('mobile-menu');
              menu.classList.toggle('hidden');
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      <div id="mobile-menu" className="md:hidden hidden bg-blue-700 text-white">
        <NavLink
          to={"/all-data"}
          className="block px-4 py-2 hover:bg-blue-800 transition duration-300"
        >
          All Data
        </NavLink>
        <NavLink
          to={"/registration-form"}
          className="block px-4 py-2 hover:bg-blue-800 transition duration-300"
        >
          Registration Form
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
