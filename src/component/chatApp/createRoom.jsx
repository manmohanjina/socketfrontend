
import React, { useState } from 'react';
import axios from 'axios';

const CreateRoom = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  
  const [roomName, setRoomName] = useState('');
  const [roomId, setRoomId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const decoded = jwtDecode(token);
    try {
      const res = await axios.post(
        'https://socketio-77oc.onrender.com/rooms/create',
        { name: roomName },
        { headers: { Authorization: token } }
      );
      setRoomId(res.data.roomId);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-4">
          <label className="block text-gray-700">Room Name</label>
          <input
            type="text"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-lg"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded-lg"
        >
          Create Room
        </button>
      </form>
      {roomId && (
        <div className="mt-4 bg-gray-200 p-2 rounded-lg">
          <p>Room ID: {roomId}</p>
          <p>Share this ID with users to join the room.</p>
        </div>
      )}
    </div>
  );
};

export default CreateRoom;
