import React from 'react';
import { NavLink } from 'react-router-dom';

export default class AboutMe extends React.Component {
  render() {
    return (

      <div>
        <div className="hero-container">
          <div className="hero-div">
            <h2 className="about-name">Hey, 👋 I'm
              <NavLink to="/about" className="name">
                <strong>Ravindra Shastri!</strong>
              </NavLink>
            </h2>
            <p>A full stack developer</p>
            <p>
              I am a MERN stack web developer,<br />
              a learner and a good listener.<br />
              I am sharpening my web development skills <br />
              by building websites and applications.
            </p>
            <p>I am from Nalanda,Bihar . I have Completed
              Graduation <br />
              With Science And Currently I am Learning
              Full stack Web development at <br /> AltCampus,Dharamshala,
              Himachal Pradesh.
            </p>
          </div>
          <div className="about-item">
            <img className="about-img" src="assets/media/self.jpg" alt="img" />
          </div>
        </div>
        {/* ABOUT SECTION  */}
        <div className="about container flex" id="about">
          <div className="about-head">
            {/* <h3>About Me</h3> */}
          </div>
          {/* <nav class="nav-bar">
            <a href="https://twitter.com/ravindrashast13"><i class="fab fa-twitter"></i></a>
            <a href="https://www.linkedin.com/in/ravindra-shastri-3942a720b/"><i class="fab fa-linkedin-in"></i></a>
            <a href="Ravindra-Shastri.github.com"><i class="fab fa-github"></i></a>
            <a href="https://hashnode.com/@ravindra660"><i class="fab fa-algolia"></i></a>
          </nav> */}
          <div className="contact-details">

            <div className="address">


              <address className="flex">
                <div className="address-div">
                  Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : Ravindra Shastri

                  <br />
                  Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :
                  <a className="mail" href="ravindrashastri90@gmail.com">
                    ravindrashastri90@gmail.com
                  </a>
                </div>
                <div className="address-div">
                  Phone &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 9334089780
                  <br />
                  Website &nbsp;&nbsp;&nbsp;&nbsp; : <a class="mail" href="Ravindra-Shastri.
                           githubio">Ravindra-Shastri.github.io</a>
                </div>
              </address>
            </div>
          </div>
        </div>
        <a href="assets/media/ravindra.pdf">Resume</a>
      </div>

    )
  }
}