import React from 'react';
import { NavLink } from "react-router-dom";

export default class Navbar extends React.Component {
  render() {
    return (
      <header>
        <div className="header-container">
          <nav>
            <NavLink className="logo" to="/">
              RS
            </NavLink>
          </nav>

          <nav className="nav-link-container">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/projects">
              Projects
            </NavLink>
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
            <NavLink className="nav-link" to="/resume">
              Resume
            </NavLink>
            <div className="download-resume">
              <a href="assets/media/R.Shastri.pdf">
                <i className="fa-solid fa-arrow-down"></i>
              </a>
            </div>
          </nav>
        </div>
      </header>
    )
  }
}
