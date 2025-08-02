import React, { useState } from 'react';
import axios from 'axios';

const AddClubForm = () => {
  const [clubName, setClubName] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please log in to create a club.');
      return;
    }

    try {
      await axios.post(
        'http://localhost:5000/api/clubs',
        { name: clubName }, // only name sent
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      alert('Club created');
      setClubName('');
    } catch (err) {
      console.error(err.response?.data || err);
      alert(err.response?.data?.message || 'Error creating club');
    }
  };

  return (
    <div>
      <h2>Add Club</h2>
      <form onSubmit={handleSubmit}>
        <label>Club Name:</label>
        <input
          type="text"
          value={clubName}
          onChange={e => setClubName(e.target.value)}
          required
        />
        <button type="submit">Create Club</button>
      </form>
    </div>
  );
};

export default AddClubForm;
