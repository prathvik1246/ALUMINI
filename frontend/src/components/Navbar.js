// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src="/images/logo.png" alt="Alumni Connect" />
      </Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/login" className="btn">Login</Link>
        <Link to="/register" className="btn btn-secondary">Register</Link>
      </div>
    </nav>
  );
}
