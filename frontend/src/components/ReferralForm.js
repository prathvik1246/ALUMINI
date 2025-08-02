import React, { useState } from 'react';
import axios from 'axios';

const ReferralForm = () => {
  const [data, setData] = useState({ graduateId: '', studentId: '', message: '', qualifications: '' });

  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/referrals', data);
      alert('Referral sent');
      setData({ graduateId: '', studentId: '', message: '', qualifications: '' });
    } catch (err) {
      console.error(err);
      alert('Error sending referral');
    }
  };

  return (
    <div>
      <h2>Send Referral</h2>
      <form onSubmit={handleSubmit}>
        <label>Your Graduate ID:</label>
        <input type="text" name="graduateId" value={data.graduateId} onChange={handleChange} required />
        <label>Student ID to Refer:</label>
        <input type="text" name="studentId" value={data.studentId} onChange={handleChange} required />
        <label>Message:</label>
        <textarea name="message" value={data.message} onChange={handleChange} required />
        <label>Qualifications:</label>
        <textarea name="qualifications" value={data.qualifications} onChange={handleChange} required />
        <button type="submit">Send Referral</button>
      </form>
    </div>
  );
};

export default ReferralForm;
