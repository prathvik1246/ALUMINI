import React, { useState } from 'react';
import axios from 'axios';
import './FormStyles.css';

function RegisterForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    gradYear: '',
    branch: '',
    role: 'student',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/register', formData);
      alert(response.data.message);
    } catch (error) {
      alert('Error: ' + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="form-container">
      <h2>Register for Alumni Connect</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Graduation Year:</label>
          <input
            type="text"
            name="gradYear"
            value={formData.gradYear}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Branch:</label>
          <input
            type="text"
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Role:</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="student">Student</option>
            <option value="graduate">Graduate</option>
          </select>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterForm;
