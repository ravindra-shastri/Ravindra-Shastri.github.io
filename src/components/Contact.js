import React from 'react';

export default class Contact extends React.Component {
  render() {
    return (
      <div>
        <section className="contact container" id="contact">
          <h4 className="contact-title">Get in touch with</h4>
          <hr className="hr"/>
          <nav className=" contact-nav">
            <a href="https://twitter.com/ravindrashast13"><i className="fab fa-twitter"></i></a>
            <a href="https://www.linkedin.com/in/ravindra-shastri-3942a720b/"><i
              className="fab fa-linkedin-in"></i></a>
            <a href="Ravindra-Shastri.github.com"><i className="fab fa-github"></i></a>
          </nav>
          <div className="contact-address">
            <div className="contact-div">
              <h4>
                Call me <br /> <span>09334089780</span> <br />
                Mail me <br /> <a className="mail" href="ravindrashastri90@gmail.
                                  com"><span>ravindrashastri90@gmail.com</span></a>
              </h4>
            </div>
            <div className="contact-div">
              <h5>Address</h5>
              <a className="mail" href="https://www.google.com/search?q=altcampus.school
                             +address&oq=altcampus.school+add&aqs=chrome.1.69i57j33i160.
                             12839j0j4&sourceid=chrome&ie=UTF-8">AltCampus</a>,Thehr,Near Patola Ground,<br />
              DharamShala,Himachal Pradesh,India
            </div>
          </div>
        </section>
      </div>
    )

  }
}