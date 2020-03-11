import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Landing-Intro">
        <p className="Name">
        hello, <br/>
        i'm augustina!
        </p>
        <p className="Intro"> 
          a senior studying Human Centered Design and Engineering at the University of Washington.
          I empower users with different levels of abilities by seeking and considering their needs and desires.
        </p>
      </div>
      <Link to = "/iselective">
        <img className="Iselective project"
          alt="project iSelective"
          src="https://www.augustinaliu.com/wp-content/uploads/2020/01/Thumbnail-1.png" 
        />
      </Link>
      <Link to = "/cozone">
        <img className="Cozone project"
          alt="project CoZone"
          src="https://www.augustinaliu.com/wp-content/uploads/2020/01/Thumbnail-2-.png" 
        />
      </Link>
      <Link to = "/navindor">
        <img className="Navindor project"
          alt="project Navindor"
          src="https://www.augustinaliu.com/wp-content/uploads/2020/01/Thumbnail-3-.png" 
        />
      </Link>
      <Footer />
    </div>
  )
}

export default App;
