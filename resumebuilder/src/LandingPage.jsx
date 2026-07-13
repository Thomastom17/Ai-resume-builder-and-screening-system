import React from 'react';
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="lp-landing-container">  
      <div className="lp-landing-card">
        <h1 className="lp-landing-title">Welcome to {"Resume Builder".toUpperCase()}</h1>
        <p className="lp-landing-subtitle">Please choose an option to continue to your account.</p>

        <div className="lp-landing-btn-group">
          <button
            className="lp-landing-button lp-landing-btn-login"
            onClick={() => navigate('/Resume-builder/login/candidate')} 
          >
            Log In
          </button>
          
          <button
            className="lp-landing-button lp-landing-btn-signup"
            onClick={() => navigate('/Resume-builder/signup')}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;