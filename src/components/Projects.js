import React from 'react';
import { PROJECTS } from '../data';

export default class Projects extends React.Component {
  render() {
    return (
      <div>
        <div>
          <div className="project-content">
            <h1>
              Apps/Websites I've Built
            </h1>
            <p>
              “I hear and and I forget.I see and I remember. I do and I
              understand. ” ― Confucius
              <br />I have worked on a variety of projects using each tech stack
              listed on my skills list to learn and understand the working of it.
            </p>
          </div>

          <div className="projects container">
            <div className="pro-head">
              <h1>Projects</h1>
              <hr className="hr" />
              <p>
                A few highlights of my projects.
                View them all on GitHub.
              </p>
            </div>
            <div className="projects-link">
              {
                PROJECTS.map(({ title, image, github, live }) => <>
                  <div className="box">

                    <p>{title}</p>
                    <img className="img" src={image} alt="" />
                    <div className="link-box">
                      {
                        github &&
                        <a className="live-link" href={github}>
                          <i className="fa-brands fa-github-alt link-icon"></i>
                        </a>
                      }
                      {
                        live &&
                        <a className="live-link" href={live}>
                          <i className="fa-solid fa-eye link-icon"></i>
                        </a>
                      }
                    </div>
                  </div>
                </>
                )
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
