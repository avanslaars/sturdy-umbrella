import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
          <form>
            <input type="text" onChange={this.handleTodoChange} value={this.state.currentTodo}/>
          </form>
          <div className="TodoList">
            <ul>
              {this.state.todos.map(todo => <li key={todo.id}><input type="checkbox" defaultChecked={todo.isComplete}/> {todo.name}</li>)}
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
