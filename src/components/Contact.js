import React from 'react';

export default class Contact extends React.Component {
  render() {
    return (
      <div>
        <section className="contact container" id="contact">
          <h4 className="contact-title">
            Get in touch with
          </h4>
          <hr className="hr" />
          <nav className=" contact-nav">
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
          <div className="contact-address">
            <div className="contact-div">
              <h2>Address</h2>
              AltCampus,Thehr,Near Patola Ground,<br />
              DharamShala,Himachal Pradesh,India

              {/* Phone and email details */}
              <div className="phone">
                <i className="fa-solid fa-phone"></i>
                <a className="phone-number" href="tell:+919334089780">
                  <span>09334089780</span>
                </a>
              </div>
              <div className="mail">
                <i class="fa-solid fa-envelope"></i>
                <a className="mail-address"
                  href="mailto:ravindrashastri90@gmail.com">
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