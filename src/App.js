import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Courses from './components/Courses';
import Mmain from './components/Mmain';
import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage'; // Import the LoginPage component
import Sidebar from './components/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import RegisterPage from './components/RegisterPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App min-h-screen">
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/login" element={<LoginPage />} /> 
          <Route path="/register" element={<RegisterPage />} />
         </Routes>
         <Mmain />
         <Courses/>
         <Footer />
      </div>
    </Router>
  );
}

export default App;






