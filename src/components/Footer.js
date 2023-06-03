import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="container">
        <p>&copy; 2023 Developer's Name. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/yourgithubprofile" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/yourlinkedinprofile" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://yourthirdplatformprofile" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-stack-overflow"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
