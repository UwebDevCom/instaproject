import React, { Component } from 'react';
import './App.css';
<<<<<<< HEAD
import Header from'./header/Header.js';

=======
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import LoginFirst from './Login-first/login-first';
import Home from './Home/home';
>>>>>>> 1df5236692b57c79a0ed0fbe95e4df4b59be4da2
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: false
    }
  }
  render() {
    return (
      <Router>
      <div className="App">
<<<<<<< HEAD
        <Header />
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
=======
      <Link to='/'></Link>
      <Route path='/' exact={true} component={this.state.isLoggedIn ? Home : LoginFirst} />
      
>>>>>>> 1df5236692b57c79a0ed0fbe95e4df4b59be4da2
      </div>
      </Router>
    );
  }
}

export default App;
