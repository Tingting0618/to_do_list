import logo from './logo.svg';
import './App.css';
import React from "react"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

          <div>
            <input type="checkbox" />
            <p>Watch Tutorial</p>
            
            <input type="checkbox" />
            <p>Finish Assessment 5</p>
            
            <input type="checkbox" />
            <p>To Do List Item 3</p>
            
            <input type="checkbox" />
            <p>To Do List Item 4</p>
        </div>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;



