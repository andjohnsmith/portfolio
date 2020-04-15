import React from 'react';
import './App.css';
import Head from './components/head.jsx';
import About from './components/about.jsx';
import Projects from './components/projects.jsx';
import Work from './components/work.jsx';
import Contact from './components/contact.jsx';
import Foot from './components/foot.jsx';

function App() {
  return (
    <div className="App">
      <Head></Head>
      <div className="container">
        <About></About>
        <Projects></Projects>
        <Work></Work>
        <Contact></Contact>
      </div>
      <Foot></Foot>
    </div>
  );
}

export default App;
