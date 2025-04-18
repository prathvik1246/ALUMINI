import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="overlay">
        <div className="home-content">
          <h1>Welcome to Alumni Connect</h1>
          <p>
            A platform to connect current students with alumni for mentorship, networking,
            and opportunities. Strengthen your professional journey with insights and support
            from experienced graduates.
          </p>
          <div className="home-buttons">
            <button onClick={() => navigate('/register')}>Register</button>
            <button onClick={() => navigate('/login')}>Sign In</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
