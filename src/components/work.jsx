import React, { Component } from 'react';

export default class Work extends Component {
  render() {
    return (
      <section className="content padding" id="work">
        <div className="row">
          <div className="col-lg-6 col-xl-6 order-lg-2 content-item background flexbox">
            <h2 className="section-title">Where I've Worked</h2>
            <h4 className="dark-blue-text">Junior Debug Tester</h4>
            <p className="light-blue-text">
              Aerotek at Nintendo of America, Redmond, WA
            </p>
            <p>
              As a debug tester, I work with other testers to identify errors
              within Nintendo video games prior to their release to the public.{' '}
            </p>
            <p>
              I provide detailed write-ups and visual reproductions of the bugs
              to be corrected. Examples of these flaws in the games can be
              anything from crashes and distortions to less-severe
              inconsistencies in text or graphics.
            </p>
            <p>
              In addition to manually testing the games, I also collaborate with
              the automation team by proposing gameplay areas to test with
              scripts.
            </p>
            <p>
              As a whole, this role has taught me the importance of testing in
              the software development life cycle and the skills to more
              exhaustively test and debug my own code.
            </p>
          </div>
          <div className="col-lg-6 col-xl-6 order-lg-1 content-item">
            <img src="images/nintendo.jpg" alt="NoA" className="tm-image" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-xl-6 content-item background flexbox">
            <h4 className="dark-blue-text">Student Lead Technician</h4>
            <p className="light-blue-text">
              University of Wisconsin, La Crosse, WI
            </p>
            <p>
              During my three years at UW–La Crosse, I was part of the
              front-line of tech support for students and faculty at the
              university.
            </p>
            <p>
              While troubleshooting clients' software issues, I helped train and
              lead the team of 12 student technicians. I developed strong skills
              communicating to users of a wide range of technical backgrounds,
              and I became exceptionally comfortable working as a team.
            </p>
            <p>
              I also worked to prevent future issues by helping user-test
              university web applications and creating client-facing
              documentation for new applications and user processes.
            </p>
            <p>
              Although I wasn't writing any code at this position, I gained
              valuable first-hand experience seeing users interact with
              software, and it helped me become a more end product-focused
              developer.
            </p>
          </div>
          <div className="col-lg-6 col-xl-6 content-item">
            <img src="images/lacrosse.jpg" alt="UWL" className="tm-image" />
          </div>
        </div>
      </section>
    );
  }
}
