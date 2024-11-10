
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://socketio-77oc.onrender.com/user/signup', { username, password });
      alert('User created');
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10">
      <div className="mb-4">
        <label className="block text-gray-700">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded-lg"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded-lg"
          required
        />
      </div>
      <div className="mb-4">
      <p className="text-center text-lg font-medium"> Wish to <Link to="/" className="text-blue-500 hover:text-blue-700 transition-colors duration-200 ease-in-out ml-1 underline" > Login </Link> </p>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded-lg"
      >
        Sign Up
      </button>
    </form>
  );
};

export default Signup;
