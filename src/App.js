import React, { Component } from 'react'
import './App.css';
import logo from './logo.png'

class App extends Component {
  state = [];

  render() {
    return(
      <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <p>
         Coming Soon!
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/c/mccoders/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Youtube
        </a>
      </header>
    </div>
    )
  }
}

export default App;
