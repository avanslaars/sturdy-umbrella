import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';
import App from './App'
import {Match, Link, Router} from './Router'

const About = (props) => {
  return (
    <div>
      <h1>About Todo</h1>
      <p>This is the about page for the React todoMVC app.</p>
    </div>
  )
}

export default class Main extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>React Todo</h2>
          </div>
          <div>
            <Link to='/'>Todo App</Link>
            {' | '}
            <Link to='/about'>About</Link>
          </div>

          <Match pattern='/' component={App} />
          <Match pattern='/about' component={About} />
        </Router>
      </div>
    )
  }
}
