import React, { useState, useRef, useEffect } from 'react';
import './CandidateHeader.css';
import FiUser from "../assets/candidate/profile.png";
import SearchIcon from "../assets/candidate/search.png";
import FiBell from "../assets/candidate/notification.png";
import settings from "../assets/candidate/settings.png";
import FiChevronDown from "../assets/candidate/dropdownarrow.png";
import logor from "../assets/candidate/logor.png";


const CandidateHeader = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  const handleLogout = () => {
    // Add logout logic here
    console.log('Logging out...');
    setDropdownOpen(false);
  };

  const handleHelp = () => {
    // Add help logic here
    console.log('Opening help...');
    setDropdownOpen(false);
  };

  return (
    <header className='can-top-header'>
      <div className='can-header-left'>
      <button
       className={`can-mobile-toggle ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(prev => !prev)}
       >
        <span></span>
        <span></span>
        <span></span>
       </button>
  
        <img src={logor} alt="Logo" className="can-logo-img" />

       <div className="can-title-container">
        <h3 className='can-dashboard-title-top'>AI Resume Builder</h3>
        <p className='can-dashboard-subtitle'>& Screening System</p>
       </div>
     </div>

      <div className='can-search-wrapper'>
        <img src={SearchIcon} width={18} height={18} alt="Search" className='can-search-icon' />
        <input type='text' placeholder='Search roles, skills, or companies...' />
      </div>

      <div className='can-user-profile'>
        <div className='can-header-icon'>
          <img src={FiBell} width={20} height={20} alt="Notifications" />
        </div>
        <div className='can-header-icon'>
          <img src={settings} width={20} height={20} alt="Settings" />
        </div>
        
        {/* User Avatar with Dropdown */}
        <div className='can-avatar-dropdown-wrapper' ref={dropdownRef}>
          <div 
            className='can-avatar-wrapper'
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <img src={FiUser} width={32} height={32} alt="User Avatar" className="can-top-avatar" />
            <div className='can-user-info'>
              <h4>Akash</h4>
              <p>candidate</p>
            </div>
            <img 
              src={FiChevronDown} 
              width={14} 
              height={14} 
              alt="Dropdown" 
              className={`can-dropdown-arrow ${dropdownOpen ? 'open' : ''}`}
            />
          </div>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className='can-user-dropdown-menu'>
              <button className='can-dropdown-item can-help-btn' onClick={handleHelp}>
                Help
              </button>
              <div className='can-dropdown-divider'></div>
              <button className='can-dropdown-item can-logout-btn' onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default CandidateHeader;