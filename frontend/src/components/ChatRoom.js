import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

// Connect to backend Socket.IO (replace URL if needed)
const socket = io('http://localhost:5000');

const ChatRoom = ({ roomId }) => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  useEffect(() => {
    // Join the room (roomId should be unique, e.g. studentId-graduateId)
    socket.emit('joinRoom', roomId);

    // Listen for incoming messages
    socket.on('receiveMessage', (data) => {
      setChat(prev => [...prev, data.text]);
    });

    // Cleanup on unmount
    return () => {
      socket.off('receiveMessage');
    };
  }, [roomId]);

  const sendMessage = () => {
    if (message.trim()) {
      // Emit the message to the server
      socket.emit('sendMessage', { room: roomId, text: message });
      setMessage('');
    }
  };

  return (
    <div>
      <h2>Chat Room</h2>
      <div style={{ border: '1px solid #ccc', padding: '10px', height: '200px', overflowY: 'scroll' }}>
        {chat.map((msg, idx) => <div key={idx}>{msg}</div>)}
      </div>
      <input
        type="text"
        value={message}
        onChange={e => setMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatRoom;
