import React from 'react';
import { NavLink } from "react-router-dom";

export default class Navbar extends React.Component {
  render() {
    return (
      <header>
        <div className="header-container">
          <nav>
            <NavLink className="resume" to="/">RS</NavLink>
          </nav>

          <nav className="nav-link-container">
            <NavLink className="nav-link" to="/about">
              <i class="fa-solid fa-floppy-disk"></i>
              About me
            </NavLink>
            <NavLink className="nav-link" to="/projects">Projects</NavLink>
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </nav>
        </div>
      </header>
    )
  }
}
