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
            <img className="resume-img" src="assets/media/R-Shastri.jpg" alt="img" />
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

            <p>Quiz-App</p>
            <div className="link-box">
              <a className="live-link" href="https://github.com/ravindra-shastri/Quiz-App">Source</a>
              <a className="live-link" href="https://quiz-app-chi-one.vercel.app/">Demo</a>
            </div>

            <p>Github-battle</p>
            <div className="link-box">
              <a className="live-link" href="https://github.com/ravindra-shastri/Github-battle">Source</a>
              <a className="live-link" href="https://github-battle-two.vercel.app/">Demo</a>
            </div>

            <p>Blog-App</p>
            <div className="link-box">
              <a className="live-link" href="https://github.com/ravindra-shastri/Blog-App">Source</a>
              <a className="live-link" href="https://blog-app-six-tawny.vercel.app/">Demo</a>
            </div>
            <p>Timer-App</p>
            <div className="link-box">
              <a className="live-link" href="https://timer-app-rho.vercel.app/">Source</a>
              <a className="live-link" href="https://github.com/ravindra-shastri/Timer-App">Demo</a>
            </div>

            <p>Monthly-Activity-Tracker</p>
            <div className="link-box">
              <a className="live-link" href="https://github.com/ravindra-shastri/Monthly-Activity-Tracker">Source</a>
              <a className="live-link" href="https://monthly-activity-tracker.vercel.app/">Demo</a>
            </div>
          </div>
        </div>
        <div className="resume-pdf">
          <a href="assets/media/Ravindra-Shastri.pdf">Upload Resume
          </a>
        </div>
      </div>
    )
  }
}

{/* <div className="box">
                <img className="img" src="assets/media/github-battle.jpg" alt="" />
                
              </div>
              <div className="box">
                <img className="img" src="assets/media/quiz.jpg" alt="" />
                
              </div>
              <div className="box">
                <img className="img" src="assets/media/blog.jpg" alt="" />
                
              </div> */}
