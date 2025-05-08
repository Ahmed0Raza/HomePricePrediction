import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import PredictionPage from './pages/PredictionPage';
import ProtectedRoute from './components/ProtectedRoute'; 
import './App.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route 
        path="/predict" 
        element={
          <ProtectedRoute>
            <PredictionPage />
          </ProtectedRoute>
        } 
      />
    </Routes>
  </BrowserRouter>
);

export default App;
