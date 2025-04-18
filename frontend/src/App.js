import React from 'react';
import RegisterForm from './components/RegisterForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="register-container">
        <h1 className="title">Alumni-Connect</h1>
        <RegisterForm />
      </div>
    </div>
  );
}

export default App;
