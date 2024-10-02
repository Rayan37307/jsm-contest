
"use client"
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <Link href="/" className="text-white text-xl font-bold">
          Logo
        </Link>
        
        {/* Hamburger menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Navigation links */}
        <ul className={`${isOpen ? 'block' : 'hidden'} lg:flex lg:space-x-4 w-full lg:w-auto mt-4 lg:mt-0`}>
          {['Home', 'About', 'Services', 'Contact'].map((item) => (
            <li key={item} className="mb-2 lg:mb-0">
              <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-white hover:text-gray-300 block">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
