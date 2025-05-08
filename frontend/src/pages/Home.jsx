import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaChartLine, FaSearchDollar, FaUserCheck } from 'react-icons/fa';
import { MdLocationOn, MdBathtub, MdKingBed, MdApartment } from 'react-icons/md';
import Navbar from '../components/Navbar';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  
  const testimonials = [
    {
      name: "Michael Johnson",
      role: "Home Buyer",
      text: "This tool helped me understand the market value of properties in my target neighborhood. Saved me thousands in negotiations!",
      avatar: "/p1.jpeg"
    },
    {
      name: "Sarah Williams",
      role: "Real Estate Agent",
      text: "I use this estimator with all my clients to set realistic expectations. The accuracy is impressive compared to other tools I've used.",
      avatar: "/p2.jpeg"
    },
    {
      name: "David Chen",
      role: "Property Investor",
      text: "As someone who analyzes multiple properties weekly, this tool streamlines my workflow and provides reliable starting points for valuation.",
      avatar: "/p3.jpeg"
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <div className="home-hero">
        <div className="overlay" />
        <img src="/HomePage.webp" alt="Beautiful modern home interior" className="home-image" />
        <div className="hero-content">
          <h1>Accurately Predict House Prices</h1>
          <p>Get reliable real-estate estimates based on your location, property features, and current market trends.</p>
          <div className="hero-buttons">
            <button className="primary-btn" onClick={() => navigate('/predict')}>Get Your Estimate</button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Choose Our Price Predictor</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon"><FaChartLine /></div>
            <h3>Data-Driven Accuracy</h3>
            <p>Our AI model is trained on millions of real estate transactions to provide estimates within 5% of actual selling prices.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><FaSearchDollar /></div>
            <h3>Market Insights</h3>
            <p>Get valuable information about price trends, comparable properties, and neighborhood valuations.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><FaUserCheck /></div>
            <h3>User Friendly</h3>
            <p>Simple interface requires minimal inputs while delivering comprehensive property valuations in seconds.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="info-section">
        <h2>How It Works</h2>
        <p className="section-subtitle">
          Our sophisticated AI model analyzes key property details to predict the most accurate market value for your home.
        </p>
        
        <div className="process-steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Enter Your Details</h3>
            <p>Provide information about your property's location, size, and features.</p>
            <div className="step-icons">
              <MdLocationOn title="Location" />
              <MdKingBed title="Bedrooms" />
              <MdBathtub title="Bathrooms" />
              <MdApartment title="Property Type" />
            </div>
          </div>
          
          <div className="step">
            <div className="step-number">2</div>
            <h3>AI Analysis</h3>
            <p>Our algorithm compares your property with current market data and recent sales.</p>
          </div>
          
          <div className="step">
            <div className="step-number">3</div>
            <h3>Get Your Estimate</h3>
            <p>Receive a detailed valuation report with confidence intervals and market insights.</p>
          </div>
        </div>

        <div className="info-callout">
          <h3>Who Can Benefit From Our Estimator?</h3>
          <div className="user-types">
            <div className="user-type">
              <FaHome />
              <h4>Home Buyers</h4>
              <p>Evaluate if a listing price is fair before making an offer</p>
            </div>
            <div className="user-type">
              <FaHome />
              <h4>Home Sellers</h4>
              <p>Set the right asking price based on current market data</p>
            </div>
            <div className="user-type">
              <FaHome />
              <h4>Real Estate Professionals</h4>
              <p>Provide clients with data-backed property valuations</p>
            </div>
            <div className="user-type">
              <FaHome />
              <h4>Property Investors</h4>
              <p>Quickly evaluate potential investment opportunities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="testimonials-container">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-avatar">
                <img src={testimonial.avatar} alt={testimonial.name} onError={(e) => {e.target.src = "/avatars/default.jpg"}} />
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <h4 className="testimonial-name">{testimonial.name}</h4>
              <p className="testimonial-role">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Get Your Home Valuation?</h2>
          <p>Start with our free estimate tool and get insights into your property's market value in minutes.</p>
          <button onClick={() => navigate('/predict')}>Get Started Now</button>
        </div>
      </section>
      
    </>
  );
};

export default Home;