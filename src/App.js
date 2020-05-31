import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <About />
        <Projects />
        <Work />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
