import React from 'react';

const Project = ({ title, description, imageUrl }) => {
  return (
    <div className="project">
      <img src={imageUrl} alt={title} />
      <div className="project-details">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href="#/">View Project</a>
      </div>
    </div>
  );
};

export default Project;
