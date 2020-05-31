import React from 'react';
import Navbar from './components/Navbar';
import About from './components/about.jsx';
import Projects from './components/projects.jsx';
import Work from './components/work.jsx';
import Contact from './components/contact.jsx';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <About></About>
        <Projects></Projects>
        <Work></Work>
        <Contact></Contact>
      </div>
      <Footer />
    </div>
  );
}

export default App;
