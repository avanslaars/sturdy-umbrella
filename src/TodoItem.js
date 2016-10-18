import React from 'react'
import {partial} from './Helpers'

const TodoItem = (props) => {
  return (
    <li><input type="checkbox" onChange={partial(props.handleToggle, props.id)} defaultChecked={props.isComplete}/> {props.name}</li>
  )
}

TodoItem.propTypes = {
  name: React.PropTypes.string,
  isComplete: React.PropTypes.bool
}

export default TodoItem
