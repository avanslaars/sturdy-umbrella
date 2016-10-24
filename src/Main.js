import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';
import App from './App'
import {Router} from './Router'

export default class Main extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>React Todo</h2>
          </div>
          <App />
        </Router>
      </div>
    )
  }
}
