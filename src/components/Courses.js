
import React, { useState } from 'react';
import Course from './Course';
import data from '../data.json';

function Courses() {
  const [showCourses, setShowCourses] = useState(false);

  const handleButtonClick = () => {
    setShowCourses(true);
  };

  return (
    <div className="bg-gradient-to-br from-purple-300 via-pink-300 to-purple-400 p-8 min-h-screen">
      <h2 className="text-5xl font-extrabold text-gray-800 mb-4 text-center">
        A Broad Selection of Courses...
      </h2>
      <h3 className="text-2xl text-gray-700 mb-6 text-center">
        Choose from over 50,000 online platforms with new courses published every week!
      </h3>

      {/* Course Categories */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <h3 className="bg-white bg-opacity-30 rounded-full px-6 py-2 text-lg text-sky-800 font-semibold transition duration-300 ease-in-out hover:bg-opacity-50 cursor-pointer">
          Fundamentals of HTML, CSS, and JavaScript
        </h3>
        <h3 className="bg-white bg-opacity-30 rounded-full px-6 py-2 text-lg text-sky-800 font-semibold transition duration-300 ease-in-out hover:bg-opacity-50 cursor-pointer">
          Introduction to Python Programming
        </h3>
        <h3 className="bg-white bg-opacity-30 rounded-full px-6 py-2 text-lg text-sky-800 font-semibold transition duration-300 ease-in-out hover:bg-opacity-50 cursor-pointer">
          Advanced Data Structures and Algorithms
        </h3>
        <h3 className="bg-white bg-opacity-30 rounded-full px-6 py-2 text-lg text-sky-800 font-semibold transition duration-300 ease-in-out hover:bg-opacity-50 cursor-pointer">
          Web Development Bootcamp
        </h3>
        <h3 className="bg-white bg-opacity-30 rounded-full px-6 py-2 text-lg text-sky-800 font-semibold transition duration-300 ease-in-out hover:bg-opacity-50 cursor-pointer">
          Machine Learning Fundamentals
        </h3>
        <h3 className="bg-white bg-opacity-30 rounded-full px-6 py-2 text-lg text-sky-800 font-semibold transition duration-300 ease-in-out hover:bg-opacity-50 cursor-pointer">
          Database Management Systems
        </h3>
        <h3 className="bg-white bg-opacity-30 rounded-full px-6 py-2 text-lg text-sky-800 font-semibold transition duration-300 ease-in-out hover:bg-opacity-50 cursor-pointer">
          Cybersecurity Basics
        </h3>
        <h3 className="bg-white bg-opacity-30 rounded-full px-6 py-2 text-lg text-sky-800 font-semibold transition duration-300 ease-in-out hover:bg-opacity-50 cursor-pointer">
          Game Development Fundamentals
        </h3>
        <h3 className="bg-white bg-opacity-30 rounded-full px-6 py-2 text-lg text-sky-800 font-semibold transition duration-300 ease-in-out hover:bg-opacity-50 cursor-pointer">
          Android App Development
        </h3>
        <h3 className="bg-white bg-opacity-30 rounded-full px-6 py-2 text-lg text-sky-800 font-semibold transition duration-300 ease-in-out hover:bg-opacity-50 cursor-pointer">
          Java Framework and SpringBoot
        </h3>
        <h3 className="bg-white bg-opacity-30 rounded-full px-6 py-2 text-lg text-sky-800 font-semibold transition duration-300 ease-in-out hover:bg-opacity-50 cursor-pointer">
          Cloud Computing
        </h3>
        <h3 className="bg-white bg-opacity-30 rounded-full px-6 py-2 text-lg text-sky-800 font-semibold transition duration-300 ease-in-out hover:bg-opacity-50 cursor-pointer">
          DevOps
        </h3>
        <h3 className="bg-white bg-opacity-30 rounded-full px-6 py-2 text-lg text-sky-800 font-semibold transition duration-300 ease-in-out hover:bg-opacity-50 cursor-pointer">
          Robotics and AI
        </h3>
        <h3 className="bg-white bg-opacity-30 rounded-full px-6 py-2 text-lg text-sky-800 font-semibold transition duration-300 ease-in-out hover:bg-opacity-50 cursor-pointer">
          Block Chain and Cryptocurrency
        </h3>
        <h3 className="bg-white bg-opacity-30 rounded-full px-6 py-2 text-lg text-sky-800 font-semibold transition duration-300 ease-in-out hover:bg-opacity-50 cursor-pointer">
          Social Media Management
        </h3>
      </div>

      {/* Main Button */}
      <div className="text-center mb-8">
        <button
          onClick={handleButtonClick}
          className="bg-black bg-opacity-60 text-white font-bold text-lg py-3 px-8 rounded-full shadow-lg hover:bg-opacity-80 hover:shadow-xl transition-transform transform hover:scale-105"
        >
          Go on... press it!
        </button>
      </div>

      {/* Course List */}
      {showCourses && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-white bg-opacity-80 rounded-xl p-6 shadow-lg hover:bg-opacity-90 hover:shadow-2xl transition-transform transform hover:scale-105"
            >
              <Course item={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Courses;
