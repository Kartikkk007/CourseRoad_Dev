import React, { useState } from 'react';
import './register.css'; 


function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Username:', username, 'Password:', password, 'Confirm Password:', confirmPassword);
    // If registration fails, set the error message
    setErrorMessage('Invalid username or password');
  };

  return (
    <div className="register-container flex justify-center items-center h-screen bg-red-400">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Register for CourseRoad</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="mt-1 px-3 py-2 border border-gray-300 rounded-lg w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 px-3 py-2 border border-gray-300 rounded-lg w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="mt-1 px-3 py-2 border border-gray-300 rounded-lg w-full"
            />
          </div>
          {errorMessage && (
            <p className="error-message">{errorMessage}</p>
          )}
          <button
            type="submit"
            className="register-button w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-700"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;