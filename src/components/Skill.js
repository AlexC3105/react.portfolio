import React from 'react';

const Skill = ({ name, icon }) => {
  return (
    <div className="skill">
      <div className="skill-icon">{icon}</div>
      <h3 className="skill-name">{name}</h3>
    </div>
  );
};

export default Skill;
