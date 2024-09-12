import React from 'react';

function Sidebar({ isOpen, onClose }) {
  return (
    <div
      className={`fixed top-0 left-0 w-64 h-[80vh] bg-gradient-to-b from-gray-800 to-gray-900 shadow-2xl p-4 rounded-lg transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out z-50`}
      style={{ zIndex: 9999 }}
    >
      
      <button
        onClick={onClose}
        className="absolute top-4 right-4 bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-lg transition duration-200 ease-in-out"
      >
        Close
      </button>
      
      <div className="h-full overflow-y-auto mt-12">
        <ul className="space-y-4 text-gray-300 font-semibold">
          <li className="py-2 px-4 bg-transparent hover:bg-blue-500 rounded-lg transition duration-200 ease-in-out hover:text-white cursor-pointer">
            pata nahi 1
          </li>
          <li className="py-2 px-4 bg-transparent hover:bg-blue-500 rounded-lg transition duration-200 ease-in-out hover:text-white cursor-pointer">
            pata nahi 2
          </li>
          <li className="py-2 px-4 bg-transparent hover:bg-blue-500 rounded-lg transition duration-200 ease-in-out hover:text-white cursor-pointer">
            pata nahi 3
          </li>
          <li className="py-2 px-4 bg-transparent hover:bg-blue-500 rounded-lg transition duration-200 ease-in-out hover:text-white cursor-pointer">
            pata nahi 4
          </li>
          <li className="py-2 px-4 bg-transparent hover:bg-blue-500 rounded-lg transition duration-200 ease-in-out hover:text-white cursor-pointer">
            pata nahi 5
          </li>
          <li className="py-2 px-4 bg-transparent hover:bg-blue-500 rounded-lg transition duration-200 ease-in-out hover:text-white cursor-pointer">
            pata nahi 6
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;

