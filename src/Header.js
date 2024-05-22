// src/Header.js
import React from 'react';
<<<<<<< HEAD
import './index.css'; // Import the global CSS file
import profileImage from './profile.webp'; // Import the profile image
=======
import './index.css'; // Make sure to import the CSS file
>>>>>>> 8ba662c74f0314bcd9607aee13b3041f6b01c4af

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
<<<<<<< HEAD
  color: '#B2A0A3', /* White text for better contrast */
    color: '#B2A0A3', // Update name color here
=======
    color: '#ccb7bb', // Update name color here
>>>>>>> 8ba662c74f0314bcd9607aee13b3041f6b01c4af
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
<<<<<<< HEAD
    color: '#fff', // Text color
    backgroundColor: '#B2A0A3', // Button color
=======
    color: '#ffffff', // Text color
    backgroundColor: '#b2a0a3', // Button color
>>>>>>> 8ba662c74f0314bcd9607aee13b3041f6b01c4af
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none'
  };

  return (
    <div style={headerContainerStyles}>
      <header style={headerStyles}>
<<<<<<< HEAD
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
=======
        <img src="/profile.webp" alt="Profile" style={imgStyles} className="bounce" />
        <h1 style={h1Styles}>Nancy Medina</h1>
      </header>
      <div style={buttonContainerStyles}>
        <a href="/Resume_Nancy_Medina.pdf" style={buttonStyles}>
          <i className="fas fa-file-alt" style={{ marginRight: '10px' }}></i>
          Resume
        </a>
        <a href="https://www.linkedin.com/in/nancy-medina-232100115" style={buttonStyles}>
          <i className="fab fa-linkedin" style={{ marginRight: '10px' }}></i>
          LinkedIn
        </a>
        <a href="https://github.com/Nancy982" style={buttonStyles}>
          <i className="fab fa-github" style={{ marginRight: '10px' }}></i>
>>>>>>> 8ba662c74f0314bcd9607aee13b3041f6b01c4af
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Header;












<<<<<<< HEAD










=======
>>>>>>> 8ba662c74f0314bcd9607aee13b3041f6b01c4af
