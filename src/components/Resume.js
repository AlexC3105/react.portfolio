import React from 'react';

function Resume() {
  return (
    <section id="resume">
      <div className="container">
        <h2>Resume</h2>
        <p>
          Download my resume:{' '}
          <a href="path/to/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume.pdf
          </a>
        </p>
        <h3>Proficiencies</h3>
        <ul>
          <li>Proficiency 1</li>
          <li>Proficiency 2</li>
          <li>Proficiency 3</li>
          {/* Add more proficiencies */}
        </ul>
      </div>
    </section>
  );
}

export default Resume;
