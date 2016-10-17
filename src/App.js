import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import Footer from './Footer'
import {AddItem, GenerateId} from './Helpers'

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentTodo: '',
      todos: []
    }

    this.handleTodoChange = this.handleTodoChange.bind(this)
    this.handleTodoSubmit = this.handleTodoSubmit.bind(this)
  }

  handleTodoChange(evt) {
    this.setState({currentTodo: evt.target.value})
  }

  handleTodoSubmit(evt) {
    evt.preventDefault()
    const newTodo = {
      id:GenerateId(),
      name: this.state.currentTodo,
      isComplete:false
    }
    const updatedTodos = AddItem(this.state.todos, newTodo)
    this.setState({
      todos: updatedTodos,
      currentTodo: ''
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todo</h2>
        </div>
        <div className="Todo-App">
          <TodoForm
            handleSubmit={this.handleTodoSubmit}
            handleTodoChange={this.handleTodoChange}
            currentTodo={this.state.currentTodo} />
          <TodoList todos={this.state.todos} />
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
