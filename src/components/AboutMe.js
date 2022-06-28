import React from 'react';
import { NavLink } from 'react-router-dom';

export default class AboutMe extends React.Component {
  render() {
    return (

      <div>
        <div className="hero-container">
          <div className="hero-div">
            <h1>About Me</h1>
            <hr className="hr"/>
            <h2 className="about-name">Hey, 👋 I'm
              <NavLink to="/about" className="name">
                <strong>Ravindra Shastri!</strong>
              </NavLink>
            </h2>
            <p className="work"><strong>A full stack developer</strong></p>
            <p className="about-para">
              I am a MERN stack web developer,
              a learner and a good listener.
              I am sharpening my web development skills
              by building websites and applications.
            </p>
            <p className="about-para">I am from Nalanda,Bihar . I have Completed
              Graduation 
              With Science And Currently I am Learning
              Full stack Web development at <br /> AltCampus,Dharamshala,
              Himachal Pradesh.
            </p>
          </div>
          <div className="about-item">
            <img className="about-img" src="assets/media/R-Shastri.jpg" alt="img" />
          </div>
        </div>
        <div className="about container flex" id="about">
          <div className="about-head">
          </div>

          <div className="contact-details">
            <div className="address">
              <address className="about-para">
                <div className="address-div">
                  Name  : Ravindra Shastri

                  <br />
                  Email :
                  <a className="about-mail" href="ravindrashastri90@gmail.com">
                    ravindrashastri90@gmail.com
                  </a>
                </div>
                <div className="address-div">
                  Phone : 9334089780
                  <br />
                  Website : <a class="about-mail" href="https://ravindrashastri.tech/">
                    https://ravindrashastri.tech/</a>
                </div>
              </address>
            </div>
          </div>
        </div>
        <div className="resume-page">
        <NavLink className="resume-about"to="/resume">Resume</NavLink> 
        </div>
      </div>

    )
  }
}