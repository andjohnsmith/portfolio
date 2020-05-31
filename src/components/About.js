import React from 'react';
import profile from '../images/profile.jpg';

const About = () => {
  return (
    <section className="row content" id="about">
      <div className="col-lg-6 col-xl-6 order-lg-2 content-item content-item-1 background flexbox">
        <h2 className="main-title text-center dark-blue-text">
          Hi, I'm Andrew Smith.
        </h2>
        <p>
          I'm a software engineer based in Seattle, WA who loves building
          convenient and streamlined applications that make life just a little
          bit easier. I have a Bachelor of Science in computer science which I
          obtained with honours at the University of Wisconsin–La Crosse after
          just three years.
        </p>
        <p>
          Some of the technologies I've been working with recently include Java,
          Spring, JavaScript, React, Node, Express, HTML, and CSS. I enjoy
          working on both the back-end and front-end, and I'm currently looking
          for an entry-level position!
        </p>
        <p>
          My time outside of work is usually spent going on hikes with my
          girlfriend and dog, hunting PS4 trophies, and learning alternative
          rock on my guitar.
        </p>
      </div>
      <div className="col-lg-6 col-xl-6 order-lg-1 content-item">
        <img src={profile} alt="Profile" className="tm-image" />
      </div>
    </section>
  );
};

export default About;
