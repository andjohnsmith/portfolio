import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [data, setData] = useState({
    isOpen: false,
    isScrolling: false,
  });

  useEffect(() => {
    window.addEventListener('scroll', scroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', scroll);
    };
  });

  const toggle = () => {
    setData({
      ...data,
      isOpen: !data.isOpen,
    });
  };

  const scroll = () => {
    setData({
      ...data,
      isScrolling: window.pageYOffset > 50 ? true : false,
    });
  };

  return (
    <div
      id="fixed-header"
      className={
        'navbar navbar-expand-md navbar-light' +
        (data.isScrolling ? ' scroll' : '')
      }
    >
      <div className="container">
        <a className="navbar-brand" href="#about">
          andjohnsmith
        </a>
        <button type="button" className="navbar-toggler" onClick={toggle}>
          <span className="navbar-toggler-icon" />
        </button>
        <div
          id="main-menu"
          className={'collapse navbar-collapse' + (data.isOpen ? ' show' : '')}
        >
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
