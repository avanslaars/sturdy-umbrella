import React from 'react'

const TodoForm = (props) => {
  return (
    <form>
      <input type="text" onChange={props.handleTodoChange} value={props.currentTodo}/>
    </form>
  )
}

TodoForm.propTypes = {
  handleTodoChange: React.PropTypes.func.isRequired,
  currentTodo: React.PropTypes.string.isRequired
}

export default TodoForm
