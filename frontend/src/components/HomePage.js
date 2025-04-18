import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Connect, Collaborate, Succeed</h1>
          <p>Your professional network for lifelong learning and career growth</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="feature-card">
          <img src="https://via.placeholder.com/300x200?text=Mentorship" alt="Mentorship" />
          <h3>Find Mentors</h3>
          <p>Connect with experienced professionals in your field</p>
        </div>
        <div className="feature-card">
          <img src="https://via.placeholder.com/300x200?text=Networking" alt="Networking" />
          <h3>Expand Network</h3>
          <p>Build meaningful connections with alumni worldwide</p>
        </div>
        <div className="feature-card">
          <img src="https://via.placeholder.com/300x200?text=Opportunities" alt="Opportunities" />
          <h3>Career Opportunities</h3>
          <p>Access exclusive job postings and internships</p>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2>Why Choose AlumniConnect?</h2>
        <div className="about-grid">
          <div className="about-item">
            <h3>For Students</h3>
            <ul>
              <li>Career guidance and mentorship</li>
              <li>Internship opportunities</li>
              <li>Skill development workshops</li>
            </ul>
          </div>
          <div className="about-item">
            <h3>For Graduates</h3>
            <ul>
              <li>Networking opportunities</li>
              <li>Job postings</li>
              <li>Professional development</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="feedback-section">
        <h2>We Value Your Feedback</h2>
        <form className="feedback-form">
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea rows="4" placeholder="Your feedback..."></textarea>
          </div>
          <button type="submit">Submit Feedback</button>
        </form>
      </section>
    </div>
  );
};

export default HomePage;
