import { useState } from 'react';
import './Signup.css'; 
import googleIcon from '../assets/google.png';
import linkedinIcon from '../assets/linkedin.png';
import loginImage from '../assets/login-image.png';

const EyeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

const EyeOffIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24M1 1l22 22"></path>
  </svg>
);

const Signup = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup submitted', {
      userName, 
      email, 
      password, 
      confirmPassword,
    });
  };

  return (
    <div className="pageContainer">
      <div className="leftPanel">
        <div className="leftTextContainer">
          <h1>Welcome back!</h1>
          <p>
            Access your account
            <br />
            and continue where
            <br />
            you left off.
          </p>
        </div>
        <img
          src={loginImage}
          alt="Login"
          className="login-image"
        />
      </div>

      <main className="rightPanel">
        <div className="formContainer">
          <h2 className="formTitle">Create an account</h2>

          <form onSubmit={handleSubmit}>
            {/* User Name */}
            <div className="fieldWrapper">
              <label className="fieldLabel" htmlFor="userName">User Name</label>
              <div className="inputWrapper">
                <input
                  id="userName"
                  type="text"
                  placeholder="Enter your name"
                  className="inputField"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
            </div>

            {/* Email ID */}
            <div className="fieldWrapper">
              <label className="fieldLabel" htmlFor="email">Email ID</label>
              <div className="inputWrapper">
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="inputField"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Password */}
            <div className="fieldWrapper">
              <label className="fieldLabel" htmlFor="password">Password</label>
              <div className="inputWrapper">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  className="inputField"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="rightElement">
                  <div className="eyeIcon" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                  </div>
                </div>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="fieldWrapper">
              <label className="fieldLabel" htmlFor="confirmPassword">Confirm Password</label>
              <div className="inputWrapper">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Re-enter your password"
                  className="inputField"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <div className="rightElement">
                  <div className="eyeIcon" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                    {showConfirmPassword ? <EyeOffIcon /> : <EyeIcon />}
                  </div>
                </div>
              </div>
            </div>

            <button type="submit" className="submitBtn">
              Signup
            </button>
          </form>

          <div className="divider"><span></span><p>OR</p><span></span></div>
          <p className="continue-text"> Or Continue with</p>

          <div className="socialContainer">
            <button type="button" className="socialBtn">
              <img src={googleIcon} alt="Google" />
            </button>
            <button type="button" className="socialBtn">
              <img src={linkedinIcon} alt="LinkedIn" /> 
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Signup;