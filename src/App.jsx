import React, { useState, Component } from 'react'
import Nav from './Nav/Nav.jsx'
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
        {/* <h1>Vite + React</h1>
        <div className="card">
          
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p> */}
      </>
    )
  }
}