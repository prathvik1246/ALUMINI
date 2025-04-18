import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-box">
        <h1>Welcome to Alumni Connect</h1>
        <p>
          Alumni Connect is a platform that bridges the gap between current students and graduates.
          Stay connected, share opportunities, and build a stronger network.
        </p>
        <div className="home-buttons">
          <button onClick={() => navigate('/register')}>Register</button>
          <button onClick={() => navigate('/login')}>Sign In</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
