import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../services/auth/authServices';
import './Navbar.css';

export default function Navbar() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const token = localStorage.getItem('authToken');
  
  useEffect(() => {
    setIsAuthenticated(!!token); // true if token exists
  }, [token]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => navigate('/')}>Home Price Prediction</div>

      <div className="auth-buttons">
        {isAuthenticated ? (
          <>
            {/* Estimate button */}
            <button className="estimate-btn" onClick={() => navigate('/predict')}>
              Estimate
            </button>

            {/* Logout button */}
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            {/* Login and Signup buttons for unauthenticated users */}
            <button className="login-btn" onClick={() => navigate('/login')}>Login</button>
            <button className="signup-btn" onClick={() => navigate('/signup')}>Signup</button>
          </>
        )}
      </div>
    </nav>
  );
}
