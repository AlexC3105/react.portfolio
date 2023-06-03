import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="container">
        <h1>Developer's Name</h1>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="active">
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" activeClassName="active">
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/resume" activeClassName="active">
                Resume
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
