import React from 'react';

export default class Home extends React.Component {
  render() {
    return (
      <>
        <div className="hero-container">
          <div className="hero-div">
            <h2 className="about-name">
              <div className="name">
                Hey, 👋 I'm
                <strong> Ravindra Shastri! </strong>
              </div>
              <p className="dev-name">
               Frontend developer
              </p>
            </h2>

            <p className="dev-name">
              I am a Frontend developer,
              a learner and a good listener.<br />
              I am sharpening my web development skills
              by building websites<br /> and applications.
            </p>
            <nav className="nav-bar">
              <a href="https://twitter.com/ravindrashast13">
                <i className="fab fa-twitter icon"></i>
              </a>
              <a href="https://www.linkedin.com/in/ravindra-shastri/">
                <i className="fab fa-linkedin-in icon"></i>
              </a>
              <a href="https://github.com/ravindra-shastri">
                <i className="fab fa-github icon"></i>
              </a>
            </nav>
          </div>
          <div>
            <img
              className="about-img"
              src="assets/media/Ravindra-Shastri.png"
              alt="img"
            />
          </div>
        </div>
      </>
    )
  }
}


