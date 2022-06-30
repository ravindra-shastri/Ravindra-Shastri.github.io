import React from 'react';

export default class Contact extends React.Component {
  render() {
    return (
      <div>
        <section className="contact container">
          <h4 className="contact-title">
            Get in touch
          </h4>
          <hr className="hr" />
          <nav className=" contact-nav">
            <a className="color"href="https://twitter.com/ravindrashast13">
              <i className="fab fa-twitter icon"></i>
            </a>
            <a className="color"href="https://www.linkedin.com/in/ravindra-shastri-3942a720b/">
              <i className="fab fa-linkedin-in icon"></i>
            </a>
            <a className="color"href="ravindra-shastri.github.com">
              <i className="fab fa-github icon"></i>
            </a>
          </nav>
          <div className="contact-address">
            <div className="contact-div">
              <h2>Address</h2>
              AltCampus,Thehr,Near Patola Ground,<br />
              DharamShala,Himachal Pradesh,India

              {/* Phone and email details */}

              <div className="phone">
                <a className="phone-number color " href="tell:+919334089780">
                <i className="fa-solid fa-phone cont-icon"></i>
                  <span>09334089780</span>
                </a>
              </div>
              <div className="mail">
                <a className="mail-address color"
                  href="mailto:ravindrashastri90@gmail.com">
                <i className="fa-solid fa-envelope cont-icon"></i>
                  <span>ravindrashastri90@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    )

  }
}