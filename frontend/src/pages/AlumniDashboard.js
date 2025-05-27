import React, { useState } from 'react';
import {
  FaBars,
  FaUserCircle,
  FaUsers,
  FaProjectDiagram,
  FaBriefcase,
  FaDonate,
  FaBullhorn,
  FaCalendarAlt,
  FaCogs
} from 'react-icons/fa';

const alumniActions = [
  { icon: FaUsers,         title: 'Network',     desc: 'Message alumni in your field.' },
  { icon: FaProjectDiagram, title: 'Post Project', desc: 'Collaborate with students.' },
  { icon: FaBriefcase,      title: 'Offer Jobs',   desc: 'Share openings & internships.' },
  { icon: FaDonate,         title: 'Give Back',    desc: 'Support scholarships.' },
  { icon: FaBullhorn,       title: 'Announcements',desc: 'Broadcast news & events.' },
  { icon: FaCalendarAlt,    title: 'Events',       desc: 'Host or RSVP to reunions.' },
  { icon: FaCogs,           title: 'Settings',     desc: 'Manage your preferences.' }
];

const recentActivities = [
  'You hosted “Alumni Meet 2025.”',
  'Project collaboration request from Jane D.',
  'You donated to scholarship fund.',
  'New jobs posted in Tech & Finance.'
];

export default function AlumniDashboard() {
  const [menuOpen, setMenuOpen]     = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <div className="dashboard-container">
      {/* HEADER */}
      <header className="dashboard-header">
        <button className="icon-btn" onClick={()=> setMenuOpen(!menuOpen)}>
          <FaBars />
        </button>
        <h2 className="dashboard-title">Alumni Dashboard</h2>
        <div className="header-right">
          <div className="profile-wrapper">
            <FaUserCircle
              className="icon-btn profile-icon"
              onClick={()=> setProfileOpen(!profileOpen)}
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
        className="dashboard-hero alumni"
        style={{ backgroundImage: "url('/images/alumni-bg.jpg')" }}
      >
        <div className="hero-overlay" />
      </div>

      {/* ACTION CARDS */}
      <section className="dashboard-actions container">
        {alumniActions.map(({ icon: Icon, title, desc }) => (
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
