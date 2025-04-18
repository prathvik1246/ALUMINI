import React, { useState } from 'react';
import './RegisterForm.css';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    graduationYear: '',
    profession: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add registration logic here
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
              value={formData.graduationYear}
              onChange={(e) => setFormData({...formData, graduationYear: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <label>Profession</label>
            <input 
              type="text" 
              value={formData.profession}
              onChange={(e) => setFormData({...formData, profession: e.target.value})}
              required
            />
          </div>
          <button type="submit">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
