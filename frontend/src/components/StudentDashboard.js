import React from 'react';
import { Link } from 'react-router-dom';

const StudentDashboard = () => {
  return (
    <div style={styles.container}>
      <h1>Welcome, Student 👩‍🎓</h1>
      <p>This is your student dashboard. Here you can:</p>
      <ul>
        <li><Link to="/graduates">View Alumni Profiles</Link></li>
        <li><Link to="/clubs">View Clubs</Link></li>
        <li><Link to="/add-club">Create a Club</Link></li>
        <li><Link to="/help-request">Request Alumni Help</Link></li>
        <li>View alumni profiles</li>
        <li>Request mentorship</li>
        <li>Explore events & resources</li>
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

export default StudentDashboard;
