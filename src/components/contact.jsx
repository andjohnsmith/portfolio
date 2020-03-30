import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <footer className="col-md-12 content" id="contact">
        <div className="col-lg-6 col-md-6 background last about-text-container">
          <h2 className="section-title">Get in Touch</h2>
          <div className="about-text">
            <div>
              Email:{' '}
              <a
                className="dark-blue-text"
                href="mailto:andrew@andjohnsmith.com"
              >
                andrew@andjohnsmith.com
              </a>
            </div>
            <div>
              GitHub:{' '}
              <a
                className="dark-blue-text"
                href="https://github.com/andjohnsmith"
                target="_blank"
              >
                github.com/andjohnsmith
              </a>
            </div>
            <div>
              LinkedIn:{' '}
              <a
                className="dark-blue-text"
                href="https://www.linkedin.com/in/andjohnsmith/"
                target="_blank"
              >
                linkedin.com/in/andjohnsmith
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 last">
          <img src="images/footer.jpg" alt="Seattle" className="tm-image" />
        </div>
      </footer>
    );
  }
}
