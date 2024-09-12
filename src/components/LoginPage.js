import React, { useState } from 'react';
import './login.css'; 

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Email:', email, 'Password:', password);
    // If login fails....
    setErrorMessage('Invalid email or password');
  };

  return (
    <div className="login-container flex justify-center items-center h-screen bg-red-400">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Login to CourseRoad</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          {errorMessage && (
            <p className="error-message">{errorMessage}</p>
          )}
          <button
            type="submit"
            className="login-button w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-700"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;