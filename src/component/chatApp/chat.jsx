import React, { useState, useEffect, useMemo } from 'react';
import { io } from 'socket.io-client';

const Chat = () => {
  const socket = useMemo(() => io('https://socketio-77oc.onrender.com/'), []);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [targetUser, setTargetUser] = useState('');
  const [connectedUsers, setConnectedUsers] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // Connect and get the user's ID
    socket.on('connect', () => {
      setUserId(socket.id);
    });

    // Handle incoming messages
    socket.on('message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    // Update connected users list
    socket.on('userConnected', (users) => {
      setConnectedUsers(users);
    });

    // Handle user disconnection
    socket.on('userDisconnected', (users) => {
      setConnectedUsers(users);
    });

    // Clean up on component unmount
    return () => {
      socket.disconnect();
    };
  }, [socket]);

  // Send a message to a specific user
  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && targetUser.trim()) {
      const payload = { message, targetUser };
      socket.emit('privateMessage', payload);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'You', message },
      ]);
      setMessage(''); // Clear input field
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Chat</h1>
        <div className="mb-4 text-center text-gray-500">
          <p>Your ID: <strong>{userId}</strong></p>
        </div>
        <div className="mb-4">
          <ul className="h-64 overflow-y-auto border border-gray-300 p-2 rounded-lg">
            {messages.map((msg, index) => (
              <li key={index} className="my-1 p-2 bg-gray-200 rounded break-words">
                <strong>{msg.sender}</strong>: {msg.message}
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
          <input
            type="text"
            value={targetUser}
            onChange={(e) => setTargetUser(e.target.value)}
            placeholder="Target user ID..."
            className="flex-1 border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
          >
            Send
          </button>
        </form>
        <div className="text-center mt-4">
          <h2 className="text-lg font-bold">Connected Users:</h2>
          <ul>
            {connectedUsers.map((user, index) => (
              <li key={index}>
                {user.id} {user.id === userId ? '(You)' : ''}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Chat;
