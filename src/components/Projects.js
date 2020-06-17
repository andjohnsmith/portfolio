import React from 'react';
import trackd from '../images/trackd.png';
import bandtrees from '../images/bandtrees.png';
import hangman from '../images/hangman.png';

const Projects = () => {
  return (
    <section className="content" id="projects">
      <div className="row">
        <div className="col-lg-6 col-xl-6 content-item background flexbox">
          <h2 className="section-title">Some Things I've Built</h2>
          <h4 className="dark-blue-text">
            <a
              href="https://github.com/andjohnsmith/hangman"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hangman
            </a>
          </h4>
          <p>
            Hangman is a web app allowing users to play the classic
            word-guessing game in three difficulty levels. The app was built on
            the MERN stack—MongoDB, Express.js, React.js, and Node.js—and
            deployed on Heroku. You can create an account and play{' '}
            <a href="http://hangman-ajs.herokuapp.com">here</a>.
          </p>
          <p>
            I coded the front-end with React, so I could easily separate the app
            into components and quickly render changes made to the page. When
            the amount of state to manage became too unwieldy to pass across
            components, I implemented Redux so I could maintain a single global
            app store.
          </p>
          <p>
            The back-end is comprised of a RESTful Node/Express API that serves
            user accounts, games, and words. That data is stored with MongoDB,
            and I used MongoDB's Atlas platform for easy management and
            retrieval. Authentication is taken care of with the help of JSON Web
            Tokens which are passed along in request headers.
          </p>
        </div>
        <div className="col-lg-6 col-xl-6 content-item">
          <img src={hangman} alt="Hangman" className="tm-image" />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-xl-6 order-lg-2 content-item background flexbox">
          <h4 className="dark-blue-text">
            <a
              href="https://github.com/andjohnsmith/trackd"
              target="_blank"
              rel="noopener noreferrer"
            >
              trackd
            </a>
          </h4>
          <p>
            Trackd is a Spring Boot app for users to easily make lists of their
            favorite songs in any given genre or topic. Lists are stored with
            their dates of creation, so it's easy to use the app as your very
            own personal mixtape diary.
          </p>
          <p>
            I used JPA and Hibernate to easily map my SQL database of tracks and
            tracklists to their respective Java objects. With Lombok, I was able
            to cut down on the boilerplate code in my Java classes and focus on
            the meat of the project.
          </p>
          <p>
            I relied on Thymeleaf to dynamically fill my HTML documents with any
            newly-added track or tracklists, and I adapted a Bootstrap template
            to quickly ensure the front-end looked good and was responsive.
          </p>
        </div>
        <div className="col-lg-6 col-xl-6 order-lg-1 content-item">
          <img src={trackd} alt="trackd" className="tm-image" />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-xl-6 content-item background flexbox">
          <h4 className="dark-blue-text">
            <a
              href="https://github.com/andjohnsmith/bandtrees"
              target="_blank"
              rel="noopener noreferrer"
            >
              Band Trees
            </a>
          </h4>
          <p>
            Band Trees allows users to discover new bands by finding related
            artists in a more refined way than what other music apps provide.
            Users can trace history through the influences of some of the
            world's most important rock bands and the others they went on to
            inspire.
          </p>
          <p>
            I worked with a partner to gather information on the specific
            influences of some of my favorite bands and relate them to each
            other with a SQLite database. I also created tables to include brief
            biographical information and a small selection of songs to give the
            user a more comprehensive view of the artist.
          </p>
          <p>
            I used React to compartmentalize the data into more manageable
            chunks and ensure the single-page front-end was updated and served
            efficiently. The RESTful API was created with the help of
            Express.js, and I used Node.js for the real-time communication
            between all the app's components.
          </p>
        </div>
        <div className="col-lg-6 col-xl-6 content-item">
          <img src={bandtrees} alt="Band Trees" className="tm-image" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
