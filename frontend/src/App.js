import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import StudentDashboard from './components/StudentDashboard';
import GraduateDashboard from './components/GraduateDashboard';
import AddGraduateForm from './components/AddGraduateForm';
import GraduatesList from './components/GraduatesList';
import AddClubForm from './components/AddClubForm';
import ClubsList from './components/ClubsList';
import HelpRequestForm from './components/HelpRequestForm';
import ReferralForm from './components/ReferralForm';
import StudentReferrals from './components/StudentReferrals';
import GraduateRequests from './components/GraduateRequests';
import ChatPage from './components/ChatPage';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="nav-brand">AlumniConnect</div>
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/register" className="nav-link">Register</Link>
          </div>
        </nav>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/graduate-dashboard" element={<GraduateDashboard />} />
          <Route path="/add-graduate" element={<AddGraduateForm />} />
          <Route path="/graduates" element={<GraduatesList />} />
          <Route path="/add-club" element={<AddClubForm />} />
          <Route path="/clubs" element={<ClubsList />} />
          <Route path="/help-request" element={<HelpRequestForm />} />
          <Route path="/send-referral" element={<ReferralForm />} />
          <Route path="/referrals" element={<StudentReferrals />} />
          <Route path="/requests" element={<GraduateRequests />} />
          <Route path="/chat/:userId" element={<ChatPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
