import React, { useState } from 'react';
import './LoginForm.css';
import { login } from '../services/auth/authServices';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const formErrors = validateForm();

  if (Object.keys(formErrors).length > 0) {
    setErrors(formErrors);
    return;
  }

  setErrors({});

  try {
    const { email, password } = formData;
    const response = await login(email, password);

    // Assuming the response contains a token
    if (response.token) {
      // Store the token in localStorage
      localStorage.setItem('token', response.token);

      // Navigate to the home page
      navigate('/');
    } else {
      setErrors({ general: 'Login failed: Token not received.' });
    }
  } catch (error) {
    setErrors({ general: error.message });
  }

  setFormData({
    email: '',
    password: '',
  });
};

  
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-form-container">
          <h1>Welcome Back</h1>
          <p className="login-subtitle">Please enter your credentials to login</p>
          
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className={errors.email ? 'input-error' : ''}
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className={errors.password ? 'input-error' : ''}
              />
              {errors.password && <p className="error-message">{errors.password}</p>}
            </div>
            
            
            <button type="submit" className="login-button">Login</button>
          </form>
          
          <div className="login-footer">
            <p>Don't have an account? <a href="/signup">Sign up</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;