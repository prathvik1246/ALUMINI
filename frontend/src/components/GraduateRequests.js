import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GraduateRequests = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      const token = localStorage.getItem('token');
      try {
        const res = await axios.get('http://localhost:5000/api/requests/incoming', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setRequests(res.data);
      } catch (err) {
        console.error('Failed to fetch requests:', err);
      }
    };
    fetchRequests();
  }, []);

  const handleDecision = async (requestId, action) => {
    const token = localStorage.getItem('token');
    try {
      await axios.put(`http://localhost:5000/api/requests/${requestId}/${action}`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      // Refresh the request list
      const updated = await axios.get('http://localhost:5000/api/requests/incoming', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setRequests(updated.data);
    } catch (err) {
      console.error(`Failed to ${action} request:`, err);
    }
  };

  const startChat = (studentId) => {
    // redirect to chat page (implement in Phase 2)
    window.location.href = `/chat/${studentId}`;
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Incoming Requests</h2>
      {requests.length === 0 ? (
        <p>No requests yet.</p>
      ) : (
        requests.map(req => (
          <div key={req._id} style={styles.card}>
            <p><strong>From:</strong> {req.from.fullName}</p>
            <p><strong>Email:</strong> {req.from.email}</p>
            <p><strong>Message:</strong> {req.message}</p>
            <p><strong>Status:</strong> {req.status}</p>

            {req.status === 'pending' && (
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button onClick={() => handleDecision(req._id, 'accept')}>Accept</button>
                <button onClick={() => handleDecision(req._id, 'reject')}>Reject</button>
              </div>
            )}

            {req.status === 'accepted' && (
              <button onClick={() => startChat(req.from._id)}>Start Chat</button>
            )}
          </div>
        ))
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
  }
};

export default GraduateRequests;
