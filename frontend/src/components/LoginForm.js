import React, { useState } from 'react';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email: formData.email,
        password: formData.password
      });
  
      alert(response.data.message || 'Login successful');

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userId', response.data.user._id);
  
      const role = response.data.role;
  
      // 🔀 Redirect based on role
      if (role === 'student') {
        navigate('/student-dashboard');
      } else if (role === 'graduate') {
        navigate('/graduate-dashboard');
      } else {
        alert('Unknown role. Please contact support.');
      }
  
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
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome Back</h2>
        <form onSubmit={handleSubmit}>
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
          <button type="submit">Sign In</button>
        </form>
        <p className="signup-link">
          New user? <a href="/register">Create account</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
