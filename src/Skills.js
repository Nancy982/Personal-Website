// src/Skills.js
import React from 'react';

const Skills = () => {
  const sectionStyles = {
    margin: '20px',
    marginBottom: '20px',
    fontFamily: 'Happy Monkey, Arial, sans-serif'
  };

  const ulStyles = {
    listStyleType: 'none',
    padding: 0,
  };

  const liStyles = {
    margin: '10px 0',
    fontSize: '1.2em'
  };

  return (
    <section style={sectionStyles}>
      <h2>Skills</h2>
      <ul style={ulStyles}>
        <li style={liStyles}>Java</li>
        <li style={liStyles}>SQL</li>
        <li style={liStyles}>C++</li>
      </ul>
    </section>
  );
};

export default Skills;