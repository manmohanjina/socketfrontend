import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useNavigate} from "react-router-dom"

const Login = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [isAdmin, setIsAdmin] = useState(false);
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 
  
  const navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://socketio-77oc.onrender.com/user/login', { username, password });
      const { token } = res.data;
      setToken(token);
      
      
      const decoded = jwtDecode(token);
     

      setIsAdmin(decoded.isAdmin);
      
      localStorage.setItem('token', token);
      

    } catch (err) {
      console.error(err.message);
    }
  };
  

  useEffect(()=>{
    isAdmin?navigate('/createroom'):navigate('/joinroom')
  },[isAdmin])

  

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
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded-lg"
      >
        Log In
      </button>
    </form>
  );
};

export default Login;
