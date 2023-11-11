import React, { useState, Component } from 'react';

import Nav from './Nav/Nav.jsx';
import Greet from './Greet/Greet.jsx';
import Intro from './Intro/Intro.jsx';
import Research from "./Research/Research.jsx";

import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <>
        <Nav />
        <div className="main-container">
          <Greet />
          <Intro />
          <Research />
        </div>
      </>
    )
  }
}