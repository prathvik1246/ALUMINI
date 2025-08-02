import React, { useState } from 'react';
import axios from 'axios';

const ChatInviteForm = () => {
  const [graduateId, setGraduateId] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const studentId = 'STUDENT_ID_HERE'; // Replace with actual logged-in student ID
    try {
      await axios.post('http://localhost:5000/api/chat-requests', { studentId, graduateId });
      alert('Invitation sent');
      setGraduateId('');
    } catch (err) {
      console.error(err);
      alert('Error sending invite');
    }
  };

  return (
    <div>
      <h2>Invite Graduate to Chat</h2>
      <form onSubmit={handleSubmit}>
        <label>Graduate ID:</label>
        <input
          type="text"
          value={graduateId}
          onChange={e => setGraduateId(e.target.value)}
          required
        />
        <button type="submit">Send Invitation</button>
      </form>
    </div>
  );
};

export default ChatInviteForm;
