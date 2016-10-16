import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todo</h2>
        </div>
        <div className="Todo-App">
          <form>
            <input type="text"/>
          </form>
          <div className="TodoList">
            <ul>
              <li><input type="checkbox" /> Plan Lesson</li>
              <li><input type="checkbox" /> Record Lesson</li>
              <li><input type="checkbox" /> Publish Lesson</li>
            </ul>
          </div>
          <div className="Footer">
            <a href="#">All</a>
            <a href="#">Active</a>
            <a href="#">Completed</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
