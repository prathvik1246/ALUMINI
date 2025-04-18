import React, { useState } from 'react';
import './RegisterForm.css';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    gradYear: '',
    branch: '',
    role: 'student',
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add fetch/axios POST call here if needed
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="gradYear"
        placeholder="Graduation Year"
        value={formData.gradYear}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="branch"
        placeholder="Branch"
        value={formData.branch}
        onChange={handleChange}
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
