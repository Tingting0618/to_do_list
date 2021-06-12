import React from "react"


function TodoItem(props) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.additional_attr.completed}
        onChange={() => props.handleChange(props.additional_attr.id)}
      />
      <p>{props.additional_attr.name}</p>
    </div>
  )
}
export default TodoItem

