import './App.css'
import React from "react"
import TodoItem from "./components/TodoItem"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      loading:false ,
      todos: []
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount(){
    this.setState({loading:true})
    fetch("http://localhost:8088/todosData")
        .then(response => response.json())
        .then(data => {this.setState({
          loading:false,
          todos: data
    })
  })
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
    const todoItems = this.state.loading ? "loading...": this.state.todos.map(i => <TodoItem key={i.id} additional_attr={i} handleClick={this.handleClick} />)

    return (
      <div className="todo-list" >
        {todoItems}
      </div>
    )

  }

}

export default App;

