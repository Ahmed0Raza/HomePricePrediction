import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} House Price Predictor. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
