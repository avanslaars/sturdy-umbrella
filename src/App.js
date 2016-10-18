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
    this.handleEmptyTodo = this.handleEmptyTodo.bind(this)
  }

  handleTodoChange(evt) {
    this.setState({
      currentTodo: evt.target.value,
      errorMessage: ''
    })
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

  handleEmptyTodo(evt) {
    evt.preventDefault()
    this.setState({
      errorMessage: 'You cannot submit an empty todo'
    })
  }

  render() {
    const submitHandler = this.state.currentTodo
      ? this.handleTodoSubmit
      : this.handleEmptyTodo
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todo</h2>
        </div>
        <div className="Todo-App">
          {this.state.errorMessage ? <span className="error">{this.state.errorMessage}</span> : null}
          <TodoForm
            handleSubmit={submitHandler}
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
