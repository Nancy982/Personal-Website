// src/App.js
import React from 'react';
import './index.css'; // Import the global CSS file
import Header from './Header';
import AboutMe from './AboutMe';
import SkillsCard from './SkillsCard';

const App = () => {
  const appStyles = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr', // Three equal columns
    alignItems: 'center',
    height: '100vh',
    padding: '20px'
  };

  const centerColumnStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  return (
    <div style={appStyles}>
      <AboutMe />
      <div style={centerColumnStyles}>
        <Header />
      </div>
      <SkillsCard />
    </div>
  );
};

export default App;








