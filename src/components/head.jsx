import React, { Component } from 'react';

export default class Head extends Component {
  render() {
    return (
      <div className="fixed-header">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle">
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="#about">
              andjohnsmith
            </a>
          </div>
          <nav className="main-menu">
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#work">Work</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a
                  className="external"
                  href="/AndrewSmithResume.pdf"
                  target="_blank"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
