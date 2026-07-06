import React, { useState } from 'react';
import './Signup.css'; 
import googleIcon from '../assets/google.png';
import linkedinIcon from '../assets/linkedin.png';
import loginImage from '../assets/login-image.png';
import eye from '../assets/show_password.png';
import eyeHide from '../assets/eye-hide.png';

const Signup = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [isConfirmPasswordHidden, setIsConfirmPasswordHidden] = useState(true);
  const [errors, setErrors] = useState({});

  const handlePhoneChange = (e) => {
    const val = e.target.value.replace(/\D/g, '');
    setMobileNumber(val.slice(0, 10));
    setErrors({ ...errors, mobileNumber: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    const regexOfMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regexofMobile = /^[6-9]\d{9}$/;
    

    if (!userName.trim()) newErrors.userName = "Username is required";
    
   if (!email.trim()) {
  newErrors.email = "Enter your email address";
} else if (!regexOfMail.test(email)) {
  newErrors.email = "Invalid email format";
}

    if (!mobileNumber.trim()) {
      newErrors.mobileNumber = "Mobile number is required";
    } else if (!regexofMobile.test(mobileNumber)) {
      newErrors.mobileNumber = "Invalid mobile number format (10 digits required)";
    }

    if (!password.trim()) newErrors.password = "Password is required";
    
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    alert("Signup successful!");
    console.log('Signup submitted data:', { userName, email, password, mobileNumber });
  };

  return (
    <div className="pageContainer">
      <div className="leftPanel">
        <div className="leftTextContainer">
          <h1>Welcome back!</h1>
          <p>Access your account<br />and continue where<br />you left off.</p>
        </div>
        <img src={loginImage} alt="Login" className="login-image" />
      </div>

      <main className="rightPanel">
        <div className="formContainer">
          <h2 className="formTitle">Create an account</h2>

          <form onSubmit={handleSubmit} noValidate>
            {/* User Name */}
            <div className="fieldWrapper">
              <label className="fieldLabel" htmlFor="userName">User Name</label>
              <div className="inputWrapper">
                <input 
                  id="userName" 
                  type="text" 
                  placeholder="Enter your Username" 
                  className={errors.userName ? "inputField input-error" : "inputField"} 
                  value={userName} 
                  onChange={(e) => { setUserName(e.target.value); setErrors({...errors, userName:""}); }} 
                />
              </div>
              {errors.userName && <span className="error-msg">{errors.userName}</span>}
            </div>

            {/* Email ID */}
            <div className="fieldWrapper">
              <label className="fieldLabel" htmlFor="email">Email ID</label>
              <div className="inputWrapper">
               <input
              id="email"
              type="text"
              placeholder="Enter Email"
               className={errors.email ? "inputField input-error" : "inputField"}
                  value={email}
                 onChange={(e) => {
          setEmail(e.target.value);
             setErrors({ ...errors, email: "" });
            }}
            />
              </div>
              {errors.email && <span className="error-msg">{errors.email}</span>}
            </div>

            
            {/* Password */}
            <div className="fieldWrapper">
              <label className="fieldLabel" htmlFor="password">Password</label>
              <div className="inputWrapper" style={{ position: 'relative' }}>
                <input 
                  id="password" 
                  type={isPasswordHidden ? 'password' : 'text'} 
                  placeholder="Create a new password" 
                  className={errors.password ? "inputField input-error" : "inputField"} 
                  value={password} 
                  onChange={(e) => { setPassword(e.target.value); setErrors({...errors, password:""}); }} 
                />
                {password.length > 0 && (
                  <div 
                    className="rightElement eye-icon" 
                    onClick={() => setIsPasswordHidden(!isPasswordHidden)} 
                    style={{ cursor: 'pointer', position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}
                  >
                    <img src={isPasswordHidden ? eyeHide : eye} className="show-icon" alt="toggle view" width="20" />
                  </div>
                )}
              </div>
              {errors.password && <span className="error-msg">{errors.password}</span>}
            </div>

            {/* Confirm Password */}
            <div className="fieldWrapper">
              <label className="fieldLabel" htmlFor="confirmPassword">Confirm Password</label>
              <div className="inputWrapper" style={{ position: 'relative' }}>
                <input 
                  id="confirmPassword" 
                  type={isConfirmPasswordHidden ? 'password' : 'text'} 
                  placeholder="Confirm password" 
                  className={errors.confirmPassword ? "inputField input-error" : "inputField"} 
                  value={confirmPassword} 
                  onChange={(e) => { setConfirmPassword(e.target.value); setErrors({...errors, confirmPassword:""}); }} 
                />
                {confirmPassword.length > 0 && (
                  <div 
                    className="rightElement eye-icon" 
                    onClick={() => setIsConfirmPasswordHidden(!isConfirmPasswordHidden)} 
                    style={{ cursor: 'pointer', position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}
                  >
                    <img src={isConfirmPasswordHidden ? eyeHide : eye} className="show-icon" alt="toggle view" width="20" />
                  </div>
                )}
              </div>
              {errors.confirmPassword && <span className="error-msg">{errors.confirmPassword}</span>}
            </div>
            {/* Mobile Number */}
            <div className="fieldWrapper">
              <label className="fieldLabel" htmlFor="mobileNumber">Mobile Number</label>
              <div className="inputWrapper">
                <input 
                  id="mobileNumber" 
                  type="tel" 
                  placeholder="Enter mobile number" 
                  className={errors.mobileNumber ? "inputField input-error" : "inputField"} 
                  value={mobileNumber} 
                  onChange={handlePhoneChange} 
                />
              </div>
              {errors.mobileNumber && <span className="error-msg">{errors.mobileNumber}</span>}
            </div>


            <button type="submit" className="submitBtn j-sign-up-submit">Signup</button>
          </form>

          <div className="divider"><span></span><p>OR</p><span></span></div>
          <div className="socialContainer">
            <button type="button" className="socialBtn"><img src={googleIcon} alt="Google" /></button>
            <button type="button" className="socialBtn"><img src={linkedinIcon} alt="LinkedIn" /></button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Signup;