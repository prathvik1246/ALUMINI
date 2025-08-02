import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentReferrals = ({ studentId }) => {
  const [refs, setRefs] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/referrals/${studentId}`)
      .then(res => setRefs(res.data))
      .catch(err => console.error(err));
  }, [studentId]);

  return (
    <div>
      <h2>Your Referrals</h2>
      <ul>
        {refs.map(ref => (
          <li key={ref._id}>
            From Graduate {ref.graduateId}: {ref.message} (Qualifications: {ref.qualifications})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentReferrals;
