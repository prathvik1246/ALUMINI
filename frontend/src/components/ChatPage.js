import { io } from 'socket.io-client';
import { useParams } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

const socket = io('http://localhost:5000');

const ChatPage = () => {
  const { userId } = useParams(); // other user
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const currentUserId = localStorage.getItem('userId'); // saved at login
  const messagesEndRef = useRef();

  const roomId = [currentUserId, userId].sort().join('-');

  useEffect(() => {
    socket.emit('joinRoom', roomId);

    socket.on('receiveMessage', (data) => {
      setMessages(prev => [...prev, data]);
    });

    return () => {
      socket.off('receiveMessage');
    };
  }, [roomId]);

  const sendMessage = () => {
    if (!input.trim()) return;
    const msg = { room: roomId, from: currentUserId, message: input };
    socket.emit('sendMessage', msg);
    setMessages(prev => [...prev, msg]);
    setInput('');
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((m, i) => (
          <div key={i} className={m.from === currentUserId ? 'chat-self' : 'chat-other'}>
            {m.message}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="chat-input">
        <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type a message..." />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatPage;
