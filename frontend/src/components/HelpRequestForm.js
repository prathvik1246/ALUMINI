import React, { useState } from 'react';
import axios from 'axios';

const HelpRequestForm = () => {
  const [data, setData] = useState({ clubId: '', clubName: '', graduateId: '', message: '' });

  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/help-requests', data);
      alert('Help request sent');
      setData({ clubId: '', clubName: '', graduateId: '', message: '' });
    } catch (err) {
      console.error(err);
      alert('Error sending help request');
    }
  };

  return (
    <div>
      <h2>Send Help Request</h2>
      <form onSubmit={handleSubmit}>
        <label>Club ID:</label>
        <input type="text" name="clubId" value={data.clubId} onChange={handleChange} required />
        <label>Club Name:</label>
        <input type="text" name="clubName" value={data.clubName} onChange={handleChange} required />
        <label>Graduate ID:</label>
        <input type="text" name="graduateId" value={data.graduateId} onChange={handleChange} required />
        <label>Message (optional):</label>
        <input type="text" name="message" value={data.message} onChange={handleChange} />
        <button type="submit">Send Request</button>
      </form>
    </div>
  );
};

export default HelpRequestForm;
