import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Interests from './components/Interests';
import NewsFeed from './components/NewsFeed';
import Recommendations from './components/Recommendations';
import HomeFeed from './components/HomeFeed';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  const handleRegister = (newUser) => {
    setUser(newUser);
  };

  const handleUpdateInterests = (newInterests) => {
    if (user) {
      // Update user's interests and save to backend (replace this with actual API call)
      const updatedUser = { ...user, selectedInterests: newInterests };
      setUser(updatedUser);
    }
  };

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
  };

  return (
    <BrowserRouter>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item"><Link to="/">Home</Link></li>
          <li className="nav-item"><Link to="/interests">Interests</Link></li>
          <li className="nav-item"><Link to="/news">News Feed</Link></li>
          <li className="nav-item"><Link to="/recommendations">Recommendations</Link></li>
          <li className="nav-item"><Link to="/register">Register</Link></li>
          <li className="nav-item"><Link to="/login">Login</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomeFeed user={user} />} />
        <Route path="/register" element={<Register onRegister={handleRegister} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route
          path="/interests"
          element={<Interests user={user} onUpdateInterests={handleUpdateInterests} />}
        />
        <Route path="/news" element={<NewsFeed user={user} />} />
        <Route path="/recommendations" element={<Recommendations user={user} />} />
      </Routes>
    </BrowserRouter>
  );
}



export default App;
