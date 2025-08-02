import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GraduateInvitations = ({ graduateId }) => {
  const [invites, setInvites] = useState([]);

  useEffect(() => {
    // Fetch invitations for this graduate
    axios.get(`http://localhost:5000/api/chat-requests/graduate/${graduateId}`)
      .then(res => setInvites(res.data))
      .catch(err => console.error(err));
  }, [graduateId]);

  const respond = (id, newStatus) => {
    axios.put(`http://localhost:5000/api/chat-requests/${id}`, { status: newStatus })
      .then(res => {
        setInvites(invites.filter(inv => inv._id !== id));
        alert(`Invitation ${newStatus}`);
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h2>Chat Invitations</h2>
      <ul>
        {invites.map(inv => (
          <li key={inv._id}>
            Invitation from Student {inv.studentId} –
            <button onClick={() => respond(inv._id, 'accepted')}>Accept</button>
            <button onClick={() => respond(inv._id, 'rejected')}>Reject</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GraduateInvitations;
