import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

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
      <Link to = "/cozone">
        <img className="Navindor project"
          alt="project Navindor"
          src="https://www.augustinaliu.com/wp-content/uploads/2020/01/Thumbnail-3-.png" 
        />
      </Link>
      <div className="footer">
        <p className="greeting">
          Say Hi here!
        </p>
        <div >
          <a href="mailto:liuao.uw@gmail.com">
            <EmailIcon className="icon"/>
          </a>
          <a href="https://www.linkedin.com/in/augustinal">
            <LinkedInIcon className="icon"/>
          </a>
        </div>
        <div className="copynote">
          <p>Designed & Code by Augustina Ao Liu in 2020. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default App;
