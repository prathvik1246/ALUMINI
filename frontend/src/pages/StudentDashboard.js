import React, { useState } from 'react';
import {
  FaBars,
  FaBell,
  FaUserCircle,
  FaGraduationCap,
  FaChalkboardTeacher,
  FaBriefcase,
  FaCalendarAlt,
  FaHandsHelping,
  FaCogs
} from 'react-icons/fa';

const studentActions = [
  { icon: FaGraduationCap,   title: 'Career Guidance',   desc: 'One-to-one sessions with experts.' },
  { icon: FaChalkboardTeacher, title: 'Find Mentors',     desc: 'Connect with alumni mentors.' },
  { icon: FaBriefcase,        title: 'Internships',       desc: 'Browse vetted opportunities.' },
  { icon: FaCalendarAlt,      title: 'Events & Webinars', desc: 'RSVP to upcoming events.' },
  { icon: FaHandsHelping,     title: 'Raise Donations',   desc: 'Fund your class projects.' },
  { icon: FaCogs,             title: 'Settings',         desc: 'Manage your preferences.' }
];

// dummy recent activity
const recentActivities = [
  'You registered for “Tech Talk 2025.”',
  'Mentor John Doe accepted your request.',
  'Your fundraiser reached 75% of its goal.',
  'New internship posted by Acme Corp.'
];

export default function StudentDashboard() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <div className="dashboard-container">
      {/* HEADER */}
      <header className="dashboard-header">
        <button className="icon-btn" onClick={()=> setMenuOpen(!menuOpen)}>
          <FaBars />
        </button>
        <h2 className="dashboard-title">Student Dashboard</h2>
        <div className="header-right">
          <FaBell className="icon-btn notification" />
          <div className="profile-wrapper">
            <FaUserCircle
              className="icon-btn profile-icon"
              onClick={() => setProfileOpen(!profileOpen)}
            />
            {profileOpen && (
              <ul className="profile-menu">
                <li>My Profile</li>
                <li>Settings</li>
                <li>Logout</li>
              </ul>
            )}
          </div>
        </div>
      </header>

      {/* (optional) slide‐in settings drawer */}
      {menuOpen && (
        <aside className="side-drawer">
          <ul>
            <li>Dashboard Home</li>
            <li>Account Settings</li>
            <li>Help / FAQ</li>
          </ul>
        </aside>
      )}

      {/* HERO */}
      <div
        className="dashboard-hero student"
        style={{ backgroundImage: "url('/images/student-bg.jpg')" }}
      >
        <div className="hero-overlay" />
      </div>

      {/* ACTION CARDS */}
      <section className="dashboard-actions container">
        {studentActions.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="action-card">
            <Icon className="action-icon" />
            <h4>{title}</h4>
            <p>{desc}</p>
          </div>
        ))}
      </section>

      {/* RECENT ACTIVITY */}
      <section className="recent-activity container">
        <h3>Recent Activity</h3>
        <ul>
          {recentActivities.map((act,i) => (
            <li key={i}>{act}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
