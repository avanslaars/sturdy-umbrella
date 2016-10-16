import React from 'react'

const TodoForm = (props) => {
  return (
    <form>
      <input type="text" onChange={props.handleTodoChange} value={props.currentTodo}/>
    </form>
  )
}

export default TodoForm
