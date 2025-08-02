import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000');
export default function ChatRoom({ roomId, user }) {
  const [msg, setMsg] = useState('');
  const [history, setHistory] = useState([]);

  useEffect(() => {
    socket.emit('join_room', roomId);
    socket.on('receive_message', data => setHistory(h => [...h, data]));
  }, [roomId]);

  const send = () => {
    const data = { room: roomId, from: user, content: msg };
    socket.emit('send_message', data);
    setHistory(h => [...h, data]);
    setMsg('');
  };

  return (
    <div className="chat-container">
      <div className="chat-history">
        {history.map((m,i) => <div key={i}><strong>{m.from}:</strong> {m.content}</div>)}
      </div>
      <div className="chat-input">
        <input value={msg} onChange={e => setMsg(e.target.value)} />
        <button onClick={send}>Send</button>
      </div>
    </div>
  );
}