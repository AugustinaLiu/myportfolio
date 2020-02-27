import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import Visual from './Visual';
import About from './About';
import UI from './UI';
import Project1 from './Project1'
import Project2 from './Project2'
import Project3 from './Project3'
import './App.css';

function App() {
  return(
    <Router>
      <header className="Nav-Bar">
        <Link to="/">WORK</Link>
        <Link to="/ui">UI DESIGN</Link>
        <Link to='./'>
          <img className="logo"
            alt="logo"
            src="https://www.augustinaliu.com/wp-content/uploads/2020/01/logo-up.png" 
          />
        </Link>
        <Link to="/visual">VISUAL DESIGN</Link>
        <Link to="/about">ABOUT</Link>
      </header>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/ui">
          <UI />
        </Route>
        <Route path="/visual">
          <Visual />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path='/iselective'>
          <Project1 />
        </Route>
        <Route path='/cozone'>
          <Project2 />
        </Route>
        <Route path='/navindor'>
          <Project3 />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
