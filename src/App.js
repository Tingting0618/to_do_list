import './App.css'
import React from "react"
import TodoItem from "./components/TodoItem"
import todosData from "./todoData"

function App() {
  const todoComponents = todosData.map(
    i => <TodoItem key={i.id} the_additional_attributes={i} />
  )
  return (
    <div className="todo-list">
      {todoComponents}
    </div>
  )
}

export default App;



