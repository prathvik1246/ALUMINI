// src/pages/Login.js
import React, { useState } from 'react';

export default function Login() {
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // TODO: hook up to your auth flow
    console.log({ email, password });
  };

  return (
    <div className="auth-container">
      <div
        className="auth-image"
        style={{ backgroundImage: "url('/images/login-bg.jpg')" }}
      />
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Login to Alumni Connect</h2>
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
        <button type="submit" className="btn">Login</button>
      </form>
    </div>
  );
}
