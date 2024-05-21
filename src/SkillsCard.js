// src/SkillsCard.js
import React from 'react';
import './SkillsCard.css';

const SkillsCard = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-front">
          <h2>Skills</h2>
        </div>
        <div className="card-back">
          <p>
            Proficient in:
            <ul>
              <li>Java</li>
              <li>SQL</li>
              <li>C++</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
