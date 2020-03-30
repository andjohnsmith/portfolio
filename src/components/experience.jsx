import React, { Component } from 'react';

export default class Experience extends Component {
  render() {
    return (
      <section className="col-md-12 content padding" id="experience">
        <div className="col-lg-6 col-md-6 col-md-6 content-item background flexbox">
          <h2 className="section-title">Where I've Worked</h2>
          <h4 className="dark-blue-text">Junior Debug Tester</h4>
          <div className="light-blue-text">
            Nintendo of America, Redmond, WA
          </div>
          <ul>
            <li>
              + Manually test video games with systematic user play and debug
              functions to cover as many gameplay scenarios as possible and
              ensure a clean product is shipped
            </li>
            <li>
              + Craft reports on each bug found with the exact procedure
              required for reproduction and short videos demonstrating the issue
            </li>
            <li>
              + Develop plans with the automation team for ways to test certain
              aspects of gameplay with scripts
            </li>
          </ul>
        </div>
        <div className="col-lg-6 col-md-6 col-md-6 content-item">
          <img src="images/nintendo.jpg" alt="NoA" className="tm-image" />
        </div>
        <div className="col-lg-6 col-md-6 col-md-push-6 content-item background flexbox">
          <h4 className="dark-blue-text">Student Lead Technician</h4>
          <p className="light-blue-text">
            University of Wisconsin, La Crosse, WI
          </p>
          <ul>
            <li>
              + Created client-facing documentation and user guides for UW
              System students and faculty to reduce the workload for other
              technicians
            </li>
            <li>
              + Developed an orientation and training program for new
              technicians with Microsoft Office products and Canvas, the
              university’s online classroom application
            </li>
            <li>
              + User-tested new university web applications before launch and
              reported any bugs or issues with user interface back to the
              developers
            </li>
          </ul>
        </div>
        <div className="col-lg-6 col-md-6 col-md-pull-6 content-item">
          <img
            src="images/lacrosse.jpg"
            alt="UW–La Crosse"
            className="tm-image"
          />
        </div>
      </section>
    );
  }
}
