import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import Footer from './Footer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentTodo: '',
      todos: [
        {id: 1, name: 'Add a state', isComplete: true},
        {id: 2, name: 'Render based on state', isComplete: true},
        {id: 3, name: 'Update the state', isComplete: false}
      ]
    }

    this.handleTodoChange = this.handleTodoChange.bind(this)
  }

  handleTodoChange(evt) {
    this.setState({currentTodo: evt.target.value})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todo</h2>
        </div>
        <div className="Todo-App">
          <TodoForm handleTodoChange={this.handleTodoChange} currentTodo={this.state.currentTodo} />
          <TodoList todos={this.state.todos} />
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
