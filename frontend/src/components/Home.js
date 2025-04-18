// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div style={{ textAlign: 'center', paddingTop: '50px' }}>
      <h1>Welcome to Alumni Connect</h1>
      <p>Please choose an option:</p>
      <div style={{ marginTop: '20px' }}>
        <Link to="/login">
          <button style={{ marginRight: '10px' }}>Sign In</button>
        </Link>
        <Link to="/register">
          <button>Sign Up</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
