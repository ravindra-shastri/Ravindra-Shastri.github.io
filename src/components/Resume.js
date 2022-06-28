import React from 'react';

export default class Resume extends React.Component {
  render() {
    return (
      <div>
        <div className="resume-img-content">
          <div className="name-content">
            <h1> RAVINDRA SHASTRI</h1>
            <p> FULL STACK DEVELOPER</p>
          </div>
          <div className="">
            <img className="resume-img" src="assets/media/self.jpg" alt="img" />
          </div>
        </div>


        <div className="address">
          <div className="para-content">
            <p><i className="fa-solid fa-phone icon"></i>
              +919334089780</p>
            <p><i className="fa-solid fa-location-smile icon"></i>
              Dharamshala,Himachal Pradesh</p>
            <p><i className="fa-solid fa-square-envelope icon"></i>
              ravindrashastri90@gmail.com</p>
            <p><i className="fa-brands fa-linkedin icon"></i>
              https://www.linkedin.com/in/ravindra-shastri-3942a720b/</p>
            <p><i className="fa-brands fa-github icon"></i>ravindra-shastri</p>
            <p><i className="fa-brands fa-twitter icon"></i>
              https://twitter.com/RavindraShast13</p>
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
                HTML, CSS & Sass, Javascript, MongoDB,
                NodeJs, ReactJS, Git
              </p>
            </div>
          </div>
        </div>
        <hr className="hr" />
        <div className="address">
          <div className="para-content">
            <h2>PROFFESIONAL HISTORY</h2>

            <h4>CADILA PHARMACEUTICALS</h4>
            <p>MEDICAL REPRESENTATIVE
              (OCT,2010 - JUL,2012)
            </p>

            <h4>KLAR SEHEN PVT. LTD</h4>
            <p>MEDICAL REPRESENTATIVE
              (JUL,2012 - APR,2013)
            </p>

            <h4>KIM LABORATORIES PVT. LTD</h4>
            <p>MEDICAL REPRESENTATIVE
              (APR,2013 - JAN,2021)
            </p>

            <h2>EDUCATIONS</h2>

            <h4>INTERMEDIATE</h4>
            <p>BIEC, PATNA</p>

            <h4>BACHELOR OF SCIENCE</h4>
            <p>MAGADH UNIVERSITY, GAYA, BIHAR</p>

            <h4>ALTCAMPUS</h4>
            <p>FULL STACK WEB DEVELOPMENT</p>
          </div>

          <hr className="hr" />

          <div className="para-content">
            <h2>PROJECTS</h2>
            <div className="project-link">
            1. <a className="btn" href="https://ravindra-shastri.github.io/block-BHaaaw/index.html">link</a>
            2. <a className="btn" href="https://ravindra-shastri.github.io/checkpoint-2/">link</a>
            3. <a className="btn" href="https://ravindra-shastri.github.io/TA-STYLE-background-and-gradients-THaaag/block-BHaabu/index.html">link</a>
            4. <a className="btn" href="https://ravindra-shastri.github.io/Checkpoint---3/">link</a>
            5. <a className="btn" href="https://ravindra-shastri.github.io/checkpoint-4">link</a>
            </div>
            
          </div>
        </div>
        <div className="resume-pdf">
          <a href="assets/media/ravindra.pdf">Resume
          </a>
        </div>
      </div>




    )
  }
}
