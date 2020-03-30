import React, { Component } from 'react';

export default class Work extends Component {
  render() {
    return (
      <section className="col-md-12 content" id="work">
        <div className="col-lg-6 col-md-6 content-item background flexbox">
          <h2 className="section-title">Some Things I've Built</h2>
          <h4 className="dark-blue-text">Band Trees</h4>
          <p>
            Created a web app for users to discover new bands or simply trace
            rock history through their favorite bands’ influences and the others
            they went on to inspire
          </p>
          <p>
            Utilized React Redux for the front-end and Node/Express for the
            RESTful back-end API
          </p>
          <p>
            Developed an SQLite database that relates each band to the other
            bands, their brief biographical information, and a select few of
            their albums and songs
          </p>
        </div>
        <div className="col-lg-6 col-md-6 content-item">
          <img
            src="images/bandtrees.png"
            alt="Band Trees"
            className="tm-image"
          />
        </div>
        <div className="col-lg-6 col-md-6 col-md-push-6 content-item background flexbox">
          <h4 className="dark-blue-text">Hangman</h4>
          <p>
            Crafted a web app that allows users to play a customizable version
            of the classic word-guessing game with HTML, CSS, JavaScript, and
            the jQuery library
          </p>
          <p>
            Designed a RESTful Node/Express API that stores and serves each of
            the user’s games along with their custom difficulties, colors, and
            fonts
          </p>
        </div>
        <div className="col-lg-6 col-md-6 col-md-pull-6 content-item">
          <img src="images/hangman.png" alt="Hangman" className="tm-image" />
        </div>
      </section>
    );
  }
}
