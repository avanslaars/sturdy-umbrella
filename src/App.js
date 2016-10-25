import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import Footer from './Footer'
import {AddItem, GenerateId, FindById, ToggleTodo, UpdateTodo, pipe, partial} from './Helpers'
import {loadTodos} from './todoService'

const filterTodos = (todos, route) => {
  switch (route) {
    case '/active':
      return todos.filter(t => !t.isComplete)
    case '/complete':
      return todos.filter(t => t.isComplete)
    default:
      return todos

  }
}

class App extends Component {
  state = {
    currentTodo: '',
    todos: []
  }

  // Access click handler from the context set by Router component
  static contextTypes = {
    route: React.PropTypes.string
  }

  handleTodoChange = (evt) => {
    this.setState({
      currentTodo: evt.target.value,
      errorMessage: ''
    })
  }

  handleTodoSubmit = (evt) => {
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

  handleEmptyTodo = (evt) => {
    evt.preventDefault()
    this.setState({
      errorMessage: 'You cannot submit an empty todo'
    })
  }

  handleToggle = (id) => {
    const updatedTodos = pipe(FindById, ToggleTodo, partial(UpdateTodo, this.state.todos))(this.state.todos, id)
    this.setState({
        todos: updatedTodos
    })
  }

  componentDidMount() {
    loadTodos()
      .then(todos => this.setState({todos}))
      .catch(err => this.setState({errorMessage: err.message}))
  }

  render() {
    const submitHandler = this.state.currentTodo ? this.handleTodoSubmit : this.handleEmptyTodo
    const displayTodos = filterTodos(this.state.todos, this.context.route)
    return (
      <div className="App">
        <div className="Todo-App">
            {this.state.errorMessage ? <span className="error">{this.state.errorMessage}</span> : null}
            <TodoForm
              handleSubmit={submitHandler}
              handleTodoChange={this.handleTodoChange}
              currentTodo={this.state.currentTodo} />
            <TodoList todos={displayTodos} handleToggle={this.handleToggle} />
            <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
