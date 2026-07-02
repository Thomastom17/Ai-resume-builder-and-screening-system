import { useState, useRef, useEffect } from 'react';
import './Signup.css'; 
import googleIcon from '../assets/google.png';
import linkedinIcon from '../assets/linkedin.png';
import loginImage from '../assets/login-image.png';


const COUNTRIES = [
  { name: 'India', code: '+91', flag: '🇮🇳', digits: 10 },
  { name: 'United States', code: '+1', flag: '🇺🇸', digits: 10 },
  { name: 'United Kingdom', code: '+44', flag: '🇬🇧', digits: 10 },
  { name: 'Australia', code: '+61', flag: '🇦🇺', digits: 9 },
  { name: 'Canada', code: '+1', flag: '🇨🇦', digits: 10 },
  { name: 'China', code: '+86', flag: '🇨🇳', digits: 11 },
  { name: 'Japan', code: '+81', flag: '🇯🇵', digits: 10 },
  { name: 'Germany', code: '+49', flag: '🇩🇪', digits: 10 },
  { name: 'France', code: '+33', flag: '🇫🇷', digits: 9 },
  { name: 'Brazil', code: '+55', flag: '🇧🇷', digits: 11 },
  { name: 'South Africa', code: '+27', flag: '🇿🇦', digits: 9 },
  { name: 'UAE', code: '+971', flag: '🇦🇪', digits: 9 },
  { name: 'Saudi Arabia', code: '+966', flag: '🇸🇦', digits: 9 },
  { name: 'Singapore', code: '+65', flag: '🇸🇬', digits: 8 },
  { name: 'New Zealand', code: '+64', flag: '🇳🇿', digits: 9 },
  { name: 'Pakistan', code: '+92', flag: '🇵🇰', digits: 10 },
  { name: 'Bangladesh', code: '+880', flag: '🇧🇩', digits: 10 },
  { name: 'Sri Lanka', code: '+94', flag: '🇱🇰', digits: 9 },
  { name: 'Nepal', code: '+977', flag: '🇳🇵', digits: 10 },
  { name: 'Malaysia', code: '+60', flag: '🇲🇾', digits: 9 },
  { name: 'Indonesia', code: '+62', flag: '🇮🇩', digits: 11 },
  { name: 'Philippines', code: '+63', flag: '🇵🇭', digits: 10 },
  { name: 'Thailand', code: '+66', flag: '🇹🇭', digits: 9 },
  { name: 'Vietnam', code: '+84', flag: '🇻🇳', digits: 9 },
  { name: 'South Korea', code: '+82', flag: '🇰🇷', digits: 10 },
  { name: 'Italy', code: '+39', flag: '🇮🇹', digits: 10 },
  { name: 'Spain', code: '+34', flag: '🇪🇸', digits: 9 },
  { name: 'Netherlands', code: '+31', flag: '🇳🇱', digits: 9 },
  { name: 'Russia', code: '+7', flag: '🇷🇺', digits: 10 },
  { name: 'Mexico', code: '+52', flag: '🇲🇽', digits: 10 },
];

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
  const [mobileNumber, setMobileNumber] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Country dropdown state
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]); // India default
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
        setCountrySearch('');
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const filteredCountries = COUNTRIES.filter((c) =>
    c.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
    c.code.includes(countrySearch)
  );

  const handlePhoneChange = (e) => {
    const val = e.target.value.replace(/\D/g, ''); // digits only
    if (val.length <= selectedCountry.digits) {
      setMobileNumber(val);
    }
    if (val.length > 0 && val.length < selectedCountry.digits) {
      setPhoneError(`Enter a valid ${selectedCountry.digits}-digit number`);
    } else {
      setPhoneError('');
    }
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setDropdownOpen(false);
    setCountrySearch('');
    setMobileNumber('');
    setPhoneError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mobileNumber && mobileNumber.length !== selectedCountry.digits) {
      setPhoneError(`Enter a valid ${selectedCountry.digits}-digit number`);
      return;
    }
    console.log('Signup submitted', {
      userName, email, password, confirmPassword,
      phone: `${selectedCountry.code}${mobileNumber}`,
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

            {/* Mobile Number with Country Dropdown */}
            <div className="fieldWrapper">
              <label className="fieldLabel" htmlFor="mobileNumber">Mobile Number (Optional)</label>
              <div className="phoneWrapper" ref={dropdownRef}>
                {/* Country selector */}
                <div
                  className="countrySelector"
                  onClick={() => setDropdownOpen((o) => !o)}
                >
                  <span className="countryFlag">{selectedCountry.flag}</span>
                  <span className="countryCode">{selectedCountry.code}</span>
                  <span className="dropdownArrow">▼</span>

                  {dropdownOpen && (
                    <div className="countryDropdown" onClick={(e) => e.stopPropagation()}>
                      <input
                        className="countrySearch"
                        type="text"
                        placeholder="Search country..."
                        value={countrySearch}
                        onChange={(e) => setCountrySearch(e.target.value)}
                        autoFocus
                      />
                      {filteredCountries.map((c, i) => (
                        <div
                          key={i}
                          className="countryOption"
                          onClick={() => handleCountrySelect(c)}
                        >
                          <span className="countryOptionFlag">{c.flag}</span>
                          <span className="countryOptionName">{c.name}</span>
                          <span className="countryOptionCode">{c.code}</span>
                        </div>
                      ))}
                      {filteredCountries.length === 0 && (
                        <div className="countryOption" style={{ color: '#9ca3af' }}>No results</div>
                      )}
                    </div>
                  )}
                </div>

                {/* Phone input */}
                <input
                  id="mobileNumber"
                  type="tel"
                  placeholder={`${selectedCountry.digits}-digit number`}
                  className="phoneInput"
                  value={mobileNumber}
                  onChange={handlePhoneChange}
                  maxLength={selectedCountry.digits}
                />
              </div>
              {phoneError && <p className="phoneError">{phoneError}</p>}
            </div>

            <button type="submit" className="submitBtn">
              Signup
            </button>
          </form>

          <div className="divider"> Or Continue with</div>

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