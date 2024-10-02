"use client"
import React, { useState } from 'react';
import { SignedIn, UserButton } from '@clerk/nextjs';

const Hero = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Agartala');

  const locations = ['Agartala', 'Mumbai', 'Delhi', 'Bangalore', 'Kolkata', 'Chennai'];

  return (
    <div className="relative h-screen bg-cover bg-center" style={{backgroundImage: "url('/hero.jpeg')"}}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">
        {/* Top navigation */}
        <nav className="absolute top-0 right-0 mt-4 mr-4">
          <ul className="flex space-x-4">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <li><a href="#" className="hover:underline">Investor Relations</a></li>
            <li><a href="#" className="hover:underline">Add restaurant</a></li>
            <li><a href="/sign-in" className="hover:underline">Log in</a></li>
            <li><a href="/sign-up" className="hover:underline">Sign up</a></li>
          </ul>
        </nav>

        {/* Get the App button */}
        <button className="absolute top-0 left-0 mt-4 ml-4 px-4 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition">
          Get the App
        </button>

        {/* Logo */}
        <h1 className="text-6xl font-bold mb-4">zomato</h1>

        {/* Tagline */}
        <p className="text-2xl mb-8">Discover the best food & drinks in Agartala</p>

        {/* Search bar */}
        <div className="w-full max-w-3xl flex">
          <div className="relative flex-1 bg-white rounded-l-full px-4 py-3 flex items-center">
            <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-gray-700 flex items-center"
            >
              {selectedLocation}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-full bg-white rounded-md shadow-lg">
                {locations.map((location) => (
                  <button
                    key={location}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => {
                      setSelectedLocation(location);
                      setIsDropdownOpen(false);
                    }}
                  >
                    {location}
                  </button>
                ))}
              </div>
            )}
          </div>
          <input
            type="text"
            placeholder="Search for restaurant, cuisine or a dish"
            className="flex-grow bg-white rounded-r-full px-4 py-3 focus:outline-none text-gray-700"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
