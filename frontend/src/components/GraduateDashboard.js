import React from 'react';
import { Link } from 'react-router-dom';
const GraduateDashboard = () => {
  return (
    <div style={styles.container}>
      <h1>Welcome, Graduate 🎓</h1>
      <p>This is your graduate dashboard. Here you can:</p>
      <ul>
        <li>Connect with fellow alumni</li>
        <li><Link to="/add-graduate">Add a Graduate</Link></li>
        <li><Link to="/requests">View Requests from Students</Link></li> {/* ✅ New line */}
        <li>Post job openings or events</li>
        <li>Give back as a mentor</li>
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '600px',
    margin: 'auto',
    textAlign: 'center'
  }
};

export default GraduateDashboard;
