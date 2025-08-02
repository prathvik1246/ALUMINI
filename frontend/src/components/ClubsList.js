// frontend/src/components/ClubsList.js (updated)
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClubsList = () => {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/clubs')
      .then(res => setClubs(res.data))
      .catch(err => console.error(err));
  }, []);

  // Join club handler
  const joinClub = async (clubId) => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please log in to join a club.');
      return;
    }
    try {
      await axios.post(
        `http://localhost:5000/api/clubs/${clubId}/join`, 
        {}, 
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('Successfully joined club!');
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || 'Error joining club');
    }
  };

  return (
    <div>
      <h2>Clubs</h2>
      <ul>
        {clubs.map(club => (
          <li key={club._id}>
            <strong>{club.name}</strong> (Head: {club.head.fullName})
            <button onClick={() => joinClub(club._id)}>Join Club</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClubsList;
