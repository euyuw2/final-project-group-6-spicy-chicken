import React, { Component } from 'react';
import { BrowserRouter as Router,Route ,Link} from 'react-router-dom'

//import React from 'react';
//import logo from './logo.svg';
import './App.css';
// 加载组件
import List from './List'
import About from './About'
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
*/
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>App</h1>
          <ul>
            <li><Link to="/list">List</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
          <hr/>
          <Route path="/list" component={List} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
