import React, { useState } from 'react';
import axios from 'axios';

const AddGraduateForm = () => {
  const [formData, setFormData] = useState({ name: '', field: '', company: '' });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('token'); // ✅ get JWT token

    const dataToSend = {
      ...formData,
      user: userId, // ✅ send user ID
    };

    try {
      await axios.post(
        'http://localhost:5000/api/graduates',
        dataToSend,
        {
          headers: {
            Authorization: `Bearer ${token}`  // ✅ attach token
          }
        }
      );

      alert('Graduate added successfully');
      setFormData({ name: '', field: '', company: '' });
    } catch (err) {
      console.error(err);
      alert('Error adding graduate');
    }
  };

  return (
    <div>
      <h2>Add Graduate</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        <label>Field:</label>
        <input type="text" name="field" value={formData.field} onChange={handleChange} required />
        <label>Company:</label>
        <input type="text" name="company" value={formData.company} onChange={handleChange} required />
        <button type="submit">Add Graduate</button>
      </form>
    </div>
  );
};

export default AddGraduateForm;
