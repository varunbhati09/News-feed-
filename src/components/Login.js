import React, { useState } from 'react';
import './styles.css'; 
function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    onLogin({ username, password });
  };

  return (
    <div className="container">
      <h2 className="header">Login</h2>
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
        <button className="button" onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;