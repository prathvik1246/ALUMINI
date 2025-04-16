import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    gradYear: '',
    branch: '',
    role: 'student', // default to 'student'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    try {
      const response = await axios.post('http://localhost:5000/api/register', formData);
      alert(response.data.message || 'Registration successful');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        alert('Error: ' + error.response.data.message);
      } else {
        alert('An unexpected error occurred.');
        console.error(error);
      }
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="Full Name"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        required
      />
      <input
        type="text"
        name="gradYear"
        value={formData.gradYear}
        onChange={handleChange}
        placeholder="Graduation Year"
        required
      />
      <input
        type="text"
        name="branch"
        value={formData.branch}
        onChange={handleChange}
        placeholder="Branch"
        required
      />
      <select name="role" value={formData.role} onChange={handleChange}>
        <option value="student">Student</option>
        <option value="graduate">Graduate</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
