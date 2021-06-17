import React from "react"



function TodoItem(props) {

  const completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
}

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.additional_attr.completed}
        onChange={() => props.handleClick(props.additional_attr.id)}
      />
      <p style={props.additional_attr.completed ? completedStyle: null}>{props.additional_attr.name}</p>
    </div>
  )
}
export default TodoItem

