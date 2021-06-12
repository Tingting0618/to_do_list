import React from "react"

function TodoItem(props) {
 return (
  <div className="todo-item">
    <input type="checkbox" checked={props.the_additional_attributes.completed} />
    <p>{props.the_additional_attributes.name}</p>
  </div>
  )
}
export default TodoItem

