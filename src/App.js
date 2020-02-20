import React, {Component} from 'react';
import ResponsiveMenu from 'react-responsive-navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="Nav-Bar">
          <a>WORK</a>
        <a>UI DESIGN</a>
        <img className="logo"
        alt="logo"
        src="https://www.augustinaliu.com/wp-content/uploads/2020/01/logo-up.png" 
      />
        <a>VISUAL DESIGN</a>
        <a>ABOUT</a>
      </header>
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
      <img className="Iselective"
        alt="project iSelective"
        src="https://www.augustinaliu.com/wp-content/uploads/2020/01/Thumbnail-1.png" 
      />
      <img className="Cozone"
        alt="project CoZone"
        src="https://www.augustinaliu.com/wp-content/uploads/2020/01/Thumbnail-2-.png" 
      />
      <img className="Navindor"
        alt="project Navindor"
        src="https://www.augustinaliu.com/wp-content/uploads/2020/01/Thumbnail-3-.png" 
      />
    </div>
  );
}

export default App;
