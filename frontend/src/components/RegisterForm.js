import React, { useState } from 'react';
import axios from 'axios';
import './RegisterForm.css';
import { useNavigate } from 'react-router-dom';



const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    gradYear: '',
    branch: '',
    role: 'student'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    try {
      const response = await axios.post('http://localhost:5000/api/register', formData);
      alert(response.data.message || 'Registration successful');

      navigate('/login');

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
    <div className="register-container">
      <div className="register-card">
        <h2>Join AlumniConnect</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input 
              type="text" 
              value={formData.fullName}
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input 
              type="email" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <label>Graduation Year</label>
            <input 
              type="number" 
              value={formData.gradYear}
              onChange={(e) => setFormData({...formData, gradYear: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <label>branch</label>
            <input 
              type="text" 
              value={formData.branch}
              onChange={(e) => setFormData({...formData, branch: e.target.value})}
              required
            />
          </div>
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="" disabled>Select Role</option>
            <option value="student">Student</option>
            <option value="graduate">Graduate</option>
          </select>
          <button type="submit">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
