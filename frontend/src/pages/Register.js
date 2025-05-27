// src/pages/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [profession, setProfession] = useState('student');
  const [name, setName]             = useState('');
  const [entry, setEntry]           = useState('');
  const [branch, setBranch]         = useState('');
  const [year, setYear]             = useState('');
  const [email, setEmail]           = useState('');
  const [password, setPassword]     = useState('');
  const [confirm, setConfirm]       = useState('');

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    if (password !== confirm) {
      alert("Passwords don't match");
      return;
    }
    // TODO: actual registration API call...
    // then redirect:
    if (profession === 'student') {
      navigate('/student');
    } else {
      navigate('/alumni');
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Create Your Account</h2>

        <label>Profession</label>
        <select
          value={profession}
          onChange={e => setProfession(e.target.value)}
          required
        >
          <option value="student">Student</option>
          <option value="alumni">Alumni</option>
        </select>

        <label>Full Name</label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />

        <label>Entry Number</label>
        <input
          type="text"
          value={entry}
          onChange={e => setEntry(e.target.value)}
          required
        />

        <label>Branch</label>
        <input
          type="text"
          value={branch}
          onChange={e => setBranch(e.target.value)}
          required
        />

        <label>Year of Passing</label>
        <input
          type="number"
          value={year}
          onChange={e => setYear(e.target.value)}
          min="1900" max="2099"
          required
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />

        <label>Confirm Password</label>
        <input
          type="password"
          value={confirm}
          onChange={e => setConfirm(e.target.value)}
          required
        />

        <button type="submit" className="btn">Register</button>
      </form>
    </div>
  );
}
