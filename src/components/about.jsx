import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <section className="col-md-12 content" id="about">
        <div className="col-lg-6 col-md-6 col-md-push-6 content-item content-item-1 background flexbox">
          <h2 className="main-title text-center dark-blue-text">
            Hi, I'm Andrew Smith.
          </h2>
          <p>
            I'm a software engineer based in Seattle, WA who loves building
            convenient and streamlined applications that make life just a little
            bit easier. I enjoy working on the full-stack, and I'm currently
            looking for an entry-level position!
          </p>
          <p>
            Some of the technologies I've been working with recently include
            Java, Spring, JavaScript, React, Node, Express, HTML, and CSS.
          </p>
          <p>
            My time outside of work is usually spent going on hikes with my
            girlfriend and dog, hunting PS4 trophies, and learning alternative
            rock on my guitar.
          </p>
        </div>
        <div className="col-lg-6 col-md-6 col-md-pull-6 content-item">
          <img src="images/profile.jpg" alt="Profile" className="tm-image" />
        </div>
      </section>
    );
  }
}
