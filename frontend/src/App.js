// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar           from './components/Navbar';
import Home             from './pages/Home';
import Login            from './pages/Login';
import Register         from './pages/Register';
import StudentDashboard from './pages/StudentDashboard';
import AlumniDashboard  from './pages/AlumniDashboard';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/login"    element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/student"  element={<StudentDashboard />} />
        <Route path="/alumni"   element={<AlumniDashboard />} />
        <Route path="*"         element={<Home />} />
      </Routes>

      <footer className="footer">
        &copy; 2025 Alumni Connect. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
