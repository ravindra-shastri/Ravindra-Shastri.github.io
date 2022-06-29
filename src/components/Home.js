import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    return (
      <>
        <div className="hero-container">
          <div className="hero-div">
            <h2 className="about-name">
              Hey, 👋 I'm
              <NavLink to="/about" className="name">
                <strong>Ravindra Shastri!</strong>
              </NavLink>
              <p className="dev-name">
                A full stack developer
              </p>
            </h2>

            <p className="dev-name">
              I am a MERN stack web developer,
              a learner and a good listener.<br />
              I am sharpening my web development skills
              by building websites<br /> and applications.
            </p>
            <nav className="nav-bar">
              <a href="https://twitter.com/ravindrashast13">
                <i className="fab fa-twitter icon"></i>
              </a>
              <a href="https://www.linkedin.com/in/ravindra-shastri-3942a720b/">
                <i className="fab fa-linkedin-in icon"></i>
              </a>
              <a href="Ravindra-Shastri.github.com">
                <i className="fab fa-github icon"></i>
              </a>
            </nav>
          </div>
          <div className="about-item">
            <img
              className="about-img"
              src="assets/media/R-Shastri.jpg"
              alt="img"
            />
          </div>
        </div>
      </>
    )
  }
}


