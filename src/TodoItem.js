import React from 'react'

const TodoItem = (props) => {
  return (
    <li><input type="checkbox" defaultChecked={props.isComplete}/> {props.name}</li>
  )
}

TodoItem.propTypes = {
  name: React.PropTypes.string,
  isComplete: React.PropTypes.bool
}

export default TodoItem
