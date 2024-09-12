import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ShoppingCartIcon,
  MagnifyingGlassCircleIcon,
  Bars3Icon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';
import Sidebar from './Sidebar';

function Navbar() {
  const navigate = useNavigate(); // Hook for navigation
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      <div className="flex justify-between items-center bg-purple-300 h-[74px] shadow-lg px-4">
        <div className="flex items-center space-x-4">
        
          <Bars3Icon className="h-6 w-6 cursor-pointer" onClick={handleSidebarToggle} />
          <h2 className="text-3xl font-bold ml-4">CourseRoad</h2>
        </div>
        <div className="flex-1 flex items-center justify-between">
          <form className="hidden md:flex bg-white border rounded-3xl h-10 items-center px-2 mx-auto max-w-md flex-grow">
            <MagnifyingGlassCircleIcon className="h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for anything"
              className="bg-transparent text-sm outline-none flex-1 px-2"
            />
          </form>
          <div className="hidden md:flex items-center space-x-4 ml-6">
            <h3 className="text-base font-semibold">CourseRoad Business</h3>
            <h3 className="text-base font-semibold">Teach on CourseRoad</h3>
          </div>
          <div className="flex items-center space-x-2">
            <MagnifyingGlassCircleIcon className="h-6 w-6 text-gray-500 md:hidden" />
            <ShoppingCartIcon className="h-6 w-6 mr-2" />
          </div>
          <div className="hidden md:flex space-x-4 items-center">
            <button
              className="border border-black h-10 text-sm font-bold w-20 hover:bg-lime-200"
              onClick={() => navigate('/login')} // Navigate to login page on click
            >
              Log In
            </button>
            <button 
              className="border border-black h-10 text-sm font-bold w-20 hover:bg-lime-200"
              onClick={() => navigate('/register')}
            >
              Register
            </button>
            <button className="border border-black w-10 flex items-center justify-center hover:bg-slate-900">
              <GlobeAltIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      {sidebarOpen && (
        <Sidebar key="sidebar" isOpen={sidebarOpen} onClose={handleSidebarToggle} />
      )}
    </div>
  );
}

export default Navbar;
