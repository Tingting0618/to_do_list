import './App.css'
import React from "react"
import TodoItem from "./components/TodoItem"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      loading:false ,
      todoitem: ""
    }
    this.handleChange = this.handleChange.bind(this)
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
  handleChange(event){
    const {name,value,type,checked} = event.target
    type === "checkbox"?
    this.setState({
      [name]:checked
    }):
    this.setState({
      [name]:value
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
      <>
      <h1>{this.state.todoitem}</h1>

      <div className="todo-list" >
        {todoItems}
      </div>

      <form className="form" >
        <input type="text" name = "todoitem" value={this.state.todoitem} placeholder="Add"
        onChange={this.handleChange}/>
        <button>Submit!</button>
      </form>
      
      </>
    )

  }

}

export default App;

