import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GraduatesList = () => {
  const [graduates, setGraduates] = useState([]);
  const [selectedGraduate, setSelectedGraduate] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchGraduates();
  }, []);

  const fetchGraduates = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/graduates');
      setGraduates(res.data);
    } catch (err) {
      console.error('Failed to load graduates:', err);
    }
  };

  const handleSendRequest = async () => {
    const token = localStorage.getItem('token');
    if (!token) return alert('Please log in.');

    try {
      await axios.post(
        'http://localhost:5000/api/requests',
        {
          to: selectedGraduate,
          message
        },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      alert('Request sent successfully!');
      setSelectedGraduate(null);
      setMessage('');
    } catch (err) {
      console.error('Failed to send request:', err);
      alert('Failed to send request');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Alumni Profiles</h2>
      {graduates.length === 0 && <p>Loading alumni...</p>}
      {graduates.map(grad => (
        <div key={grad._id} style={styles.card}>
          <h3>{grad.name}</h3>
          <p>Field: {grad.field}</p>
          <p>Company: {grad.company}</p>
          {/* <p>From: {grad.user?.fullName}</p> */}
          <button onClick={() => setSelectedGraduate(grad.user._id)}>Send Request</button>
        </div>
      ))}

      {/* Request form/modal */}
      {selectedGraduate && (
        <div style={styles.modal}>
          <h4>Send a message</h4>
          <textarea
            placeholder="Type your message..."
            value={message}
            onChange={e => setMessage(e.target.value)}
            rows={4}
            style={{ width: '100%' }}
          />
          <br />
          <button onClick={handleSendRequest}>Send</button>
          <button onClick={() => setSelectedGraduate(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '1rem',
    marginBottom: '1rem',
    borderRadius: '8px'
  },
  modal: {
    position: 'fixed',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    background: '#fff',
    padding: '1rem',
    boxShadow: '0 0 10px rgba(0,0,0,0.3)',
    borderRadius: '8px',
    width: '90%',
    maxWidth: '400px',
    zIndex: 1000
  }
};

export default GraduatesList;
