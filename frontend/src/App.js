import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom';
import RegisterForm from './components/RegisterForm'; // Ensure the correct import path
import LoginForm from './components/Login'; // Ensure the correct import path
import HomePage from './components/Home';

function App() {
  console.log("App is rendering");
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Router>
  );
}

export default App;
