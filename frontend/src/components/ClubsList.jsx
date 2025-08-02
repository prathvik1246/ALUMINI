import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ClubsList() {
  const [clubs, setClubs] = useState([]);
  useEffect(() => { axios.get('/api/clubs').then(r => setClubs(r.data)); }, []);
  return (
    <div className="clubs-grid">
      {clubs.map(c => (
        <div key={c._id} className="card">
          <h3>{c.name}</h3>
          <p>Head: {c.head.fullName}</p>
          <p>Members: {c.members.length}</p>
        </div>
      ))}
    </div>
  );
}