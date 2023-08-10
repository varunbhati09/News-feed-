import React, { useState } from 'react';
import './styles.css'; 
function Register({ onRegister }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    onRegister({ username, password });
  };

  return (
    <div className="container">
      <h2 className="header">Register</h2>
      <div className="form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input"
        />
        <button className="button" onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
}

export default Register;