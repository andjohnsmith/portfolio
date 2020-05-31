import React from 'react';

const Navbar = () => {
  return (
    <div id="fixed-header" className="navbar navbar-expand-md navbar-light">
      <div className="container">
        <a className="navbar-brand" href="#about">
          andjohnsmith
        </a>
        <button type="button" className="navbar-toggler">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse main-menu">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#work">
                Work
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a
                className="external nav-link"
                href="/AndrewSmithResume.pdf"
                target="_blank"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
