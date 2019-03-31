import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import LoginFirst from './Login-first/login-first';
import Home from './Home/home';
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
      <Link to='/'></Link>
      <Route path='/' exact={true} component={this.state.isLoggedIn ? Home : LoginFirst} />
      
      </div>
      </Router>
    );
  }
}

export default App;
