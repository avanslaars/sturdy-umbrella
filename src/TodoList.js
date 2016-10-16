import React from 'react'
import TodoItem from './TodoItem'

const TodoList = (props) => {
  return (
    <div className="TodoList">
      <ul>
        {props.todos.map(todo => <TodoItem key={todo.id} {...todo} />)}
      </ul>
    </div>
  )
}

export default TodoList
