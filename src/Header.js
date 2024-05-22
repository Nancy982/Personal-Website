// src/Header.js
import React from 'react';
import './index.css'; // Import the global CSS file
import profileImage from './profile.webp'; // Import the profile image

const Header = () => {
  const headerContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  const headerStyles = {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  const h1Styles = {
    fontSize: '7.5em', // 3 times the original size of 2.5em
    margin: '20px 0', // Add margin to space out from the profile picture and buttons
    fontFamily: 'Happy Monkey, Arial, sans-serif',
  color: '#B2A0A3', /* White text for better contrast */
    color: '#B2A0A3', // Update name color here
    textAlign: 'center'
  };

  const imgStyles = {
    borderRadius: '50%',
    width: '450px',
    height: '450px',
    objectFit: 'cover',
    marginBottom: '20px'
  };

  const buttonContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px'
  };

  const buttonStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '200px',
    padding: '10px',
    margin: '10px 0',
    fontSize: '1.2em',
    fontFamily: 'Happy Monkey, Arial, sans-serif',
    color: '#fff', // Text color
    backgroundColor: '#B2A0A3', // Button color
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none'
  };

  return (
    <div style={headerContainerStyles}>
      <header style={headerStyles}>
        <img src={profileImage} alt="Profile" style={imgStyles} className="bounce" />
        <h1 style={h1Styles}>Nancy Medina</h1>
      </header>
      <div style={buttonContainerStyles}>
        <a href="/Resume_Nancy_Medina.pdf" target="_blank" rel="noopener noreferrer" style={buttonStyles}>
          Resume
        </a>
        <a href="https://www.linkedin.com/in/nancy-medina-232100115" target="_blank" rel="noopener noreferrer" style={buttonStyles}>
          LinkedIn
        </a>
        <a href="https://github.com/Nancy982" target="_blank" rel="noopener noreferrer" style={buttonStyles}>
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Header;






















