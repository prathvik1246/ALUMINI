import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function GuidanceList() {
  const [grads, setGrads] = useState([]);
  useEffect(() => { axios.get('/api/graduates').then(r => setGrads(r.data)); }, []);
  return (
    <div className="guidance-grid">
      {grads.map(g => (
        <div key={g._id} className="card">
          <h3>{g.user.fullName}</h3>
          <p>{g.field} @ {g.company}</p>
        </div>
      ))}
    </div>
  );
}