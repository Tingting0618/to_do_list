import './App.css'
import React from "react"
import TodoItem from "./components/TodoItem"
import todosData from "./todosData"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }

  render() {
    const todoItems = this.state.todos.map(i => <TodoItem key={i.id} additional_attr={i} handleClick={this.handleClick} />)

    return (
      <div className="todo-list" >
        {todoItems}
      </div>
    )

  }

}

export default App;

