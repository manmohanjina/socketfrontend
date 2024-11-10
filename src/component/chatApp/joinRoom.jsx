
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom"
const JoinRoom = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [joinRoomId, setJoinRoomId] = useState('');
  const [roomId,setRoomId]=useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        'https://socketio-77oc.onrender.com/user/join',
        { roomId: joinRoomId },
        { headers: { Authorization: token } }
      );
      setRoomId(joinRoomId);
      console.log(roomId);
      
    } catch (err) {
      console.error(err.message);
    }
  };
  const navigate=useNavigate()
  useEffect(()=>{
 if(roomId){
  navigate('/chat')
 }
  },[roomId])

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10">
      <div className="mb-4">
        <label className="block text-gray-700">Room ID</label>
        <input
          type="text"
          value={joinRoomId}
          onChange={(e) => setJoinRoomId(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded-lg"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded-lg"
      >
        Join Room
      </button>
    </form>
  );
};

export default JoinRoom;
