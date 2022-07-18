import React from 'react';
import { RESUME_PROJECTS, PROFESSION, EDUCATIONS } from '../data';
export default class Resume extends React.Component {
  render() {
    return (
      <div>
        <div className="resume-img-content">
          <div className="name-content">
            <h1> RAVINDRA SHASTRI</h1>
            <p> FULL STACK DEVELOPER</p>
          </div>
        </div>
        <hr className="hr" />

        <div className="address">
          <div className="para-content">
            <p>
              <a className="color" href="tell:+919334089780">
                <i className="fa-solid fa-phone icon"></i>
                09334089780
              </a>
            </p>
            <p>
              <i className="fa-solid fa-location-dot icon"></i>
              Dharamshala,Himachal Pradesh
            </p>
            <p>

              <a className="color" href="mailto:ravindrashastri90@gmail.com">
                <i className="fa-solid fa-square-envelope icon"></i>
                ravindrashastri90@gmail.com
              </a>
            </p>
            <p>
              <a className="color" href="https://github.com/ravindra-shastri">
                <i className="fa-brands fa-github icon"></i>
                https://github.com/ravindra-shastri</a>
            </p>
            <p>
              <a className="color" href="https://twitter.com/RavindraShast13">
                <i className="fa-brands fa-twitter icon"></i>
                https://twitter.com/RavindraShast13
              </a>
            </p>
            <p>
              <a className="color" href="https://www.linkedin.com/in/ravindra-shastri/">
                <i className="fa-brands fa-linkedin icon"></i>
                https://www.linkedin.com/in/ravindra-shastri
              </a>
            </p>
            <p>
              <a className="color" href="https://ravindrashastri.tech">
                <i className="fa-solid fa-earth-asia icon"></i>
                https://ravindrashastri.tech
              </a>
            </p>
          </div>
          <hr className="hr" />
          <div className="para-content">
            <p>I am a web developer seeking
              profession to help in the field of web
              development, where I can apply my
              knowledge, skills, and experience for
              continuous improvements.
            </p>
            <div>
              <h2>AREAS OF EXPERTISE</h2>
              <p>
                React js, Redux, Hooks, Javascript, HTML, CSS ,
                SCSS,  Node js, Express js, MongoDB, Git
              </p>
            </div>
          </div>
        </div>
        <hr className="hr" />
        <div className="address">
          <div className="para-content">
            <h2>PROFFESIONAL HISTORY</h2>
            {
              PROFESSION.map(({ title, timeline }) => <>
                <h4>{title}</h4>
                <p>{timeline}</p>
              </>
              )
            }

            <h2 className="edu-title">EDUCATIONS</h2>
            {
              EDUCATIONS.map(({ level, board }) => <>
                <h4>
                  {level}
                </h4>
                <p>{board}</p>
              </>
              )
            }
          </div>

          <hr className="hr" />

          <div className="para-content">
            <h2>PROJECTS</h2>

            {
              RESUME_PROJECTS.map(({ title, github, live }) =>
                <div className="project-item">
                  <p>{title}</p>
                  <div className="link-box">
                    {
                      live &&
                      <a className="live-link" href={live}>
                        <i className="fa-solid fa-eye link-icon"></i>
                      </a>
                    }
                    {github &&
                      <a className="live-link" href={github}>
                        <i className="fa-brands fa-github-alt link-icon"></i>
                      </a>
                    }

                  </div>
                </div>)
            }
          </div>
        </div>
      </div>
    )
  }
}
