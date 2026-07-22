import React, { useState, useRef, useEffect } from 'react';
import './RecruiterHeader.css';
import FiUser from "../assets/recruiter/FiUser.png";
import SearchIcon from "../assets/recruiter/SearchIcon.png";
import FiBell from "../assets/recruiter/FiBell.png";
import settings from "../assets/recruiter/settings.png";
import FiChevronDown from "../assets/candidate/dropdownarrow.png";

const RecruiterHeader = ({ mobileMenuOpen, setMobileMenuOpen }) => {
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
    <header className='rec-top-header'>
      <div className='rec-header-left'>
       
        <button
          className={`rec-mobile-toggle ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(prev => !prev)}
          aria-label="Toggle sidebar menu"
          aria-expanded={mobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <span className='rec-dashboard-title-top'>AI Resume Builder & Screening System</span>
      </div>
      <div className='rec-search-wrapper'>
        <img src={SearchIcon} width={18} height={18} alt="Search" className='rec-search-icon' />
        <input type='text' placeholder='Search roles, skills, or companies...' />
      </div>
      <div className='rec-user-profile'>
        <div className='rec-header-icon'><img src={FiBell} width={20} height={20} alt="Notifications" /></div>
        <div className='rec-header-icon'><img src={settings} width={20} height={20} alt="Settings" /></div>
        
        {/* User Avatar with Dropdown */}
        <div className='rec-avatar-dropdown-wrapper' ref={dropdownRef}>
          <div 
            className='rec-avatar-wrapper'
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <img src={FiUser} width={32} height={32} alt="User Avatar" className="rec-top-avatar" />
            <div className='rec-user-info'>
              <h4>Akash</h4>
              <p>Recruiter</p>
            </div>
            <img 
              src={FiChevronDown} 
              width={14} 
              height={14} 
              alt="Dropdown" 
              className={`rec-dropdown-arrow ${dropdownOpen ? 'open' : ''}`}
            />
          </div>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className='rec-user-dropdown-menu'>
              <button className='rec-dropdown-item rec-help-btn' onClick={handleHelp}>
             
                Help
              </button>
              <div className='rec-dropdown-divider'></div>
              <button className='rec-dropdown-item rec-logout-btn' onClick={handleLogout}>
               
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default RecruiterHeader;