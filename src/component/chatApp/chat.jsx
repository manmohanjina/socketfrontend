import React, { useState, useEffect, useMemo } from 'react';
import { io } from 'socket.io-client';

const Chat = ({ roomId, userId='Noob' }) => {
  const socket = useMemo(() => io('https://socketio-77oc.onrender.com/'), []);

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.emit('joinRoom', { roomId, userId });

    socket.on('message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.disconnect();
    };
  }, [socket, roomId, userId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      socket.emit('message', { roomId, message });
      setMessage(''); 
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Chat Room</h1>
        <div className="mb-4">
          <ul className="h-64 overflow-y-auto border border-gray-300 p-2 rounded-lg">
            {messages.map((msg, index) => (
              <li key={index} className="my-1 p-2 bg-gray-200 rounded break-words">
                {msg}
              </li>
            ))}
          </ul>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
