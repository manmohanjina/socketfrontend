import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';

const Game = () => {
  const [gameState, setGameState] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState(null);
  const [message, setMessage] = useState('');
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io('http://localhost:3000');

    socketRef.current.emit('joinGame');

    socketRef.current.on('gameState', (state, playerType) => {
      setGameState(state);
      if (playerType) {
        setPlayer(playerType);
      }
    });

    socketRef.current.on('playerJoined', (players) => {
      setMessage(`Players connected: ${Object.keys(players).length}`);
    });

    socketRef.current.on('gameOver', (winnerMessage) => {
      setMessage(winnerMessage);
      setTimeout(() => {
        setGameState(Array(9).fill(null));
        setMessage('');
      }, 2000);
    });

    socketRef.current.on('playerLeft', (players) => {
      setMessage(`Players connected: ${Object.keys(players).length}`);
    });

    socketRef.current.on('connect_error', (err) => {
      console.error('Connection error:', err);
      setMessage('Failed to connect to server');
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  const handleClick = (index) => {
    if (player && !gameState[index]) {
      socketRef.current.emit('makeMove', index);
    }
  };

  const renderSquare = (index) => {
    return (
      <button 
        className="w-24 h-24 flex items-center justify-center bg-white border-2 border-gray-300 text-2xl font-bold" 
        onClick={() => handleClick(index)}
      >
        {gameState[index]}
      </button>
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs">
        <h1 className="text-2xl font-bold mb-4 text-center">Tic Tac Toe</h1>
        <div className="text-center mb-4">{message}</div>
        <div className="grid grid-cols-3 gap-2">
          {gameState.map((square, index) => (
            <div key={index} className="flex items-center justify-center">
              {renderSquare(index)}
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          {player ? `You are ${player}` : 'Waiting for another player...'}
        </div>
      </div>
    </div>
  );
};

export default Game;
