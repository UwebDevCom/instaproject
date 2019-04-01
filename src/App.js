import React, { Component } from 'react';
import './App.css';
import Header from'./header/Header.js';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import LoginFirst from './Login-first/login-first';
import Home from './Home/home';
import ContextProvider from './AppContext/AppContext';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: false
    }
  }
  render() {
    return (
      <ContextProvider>
        <Router>
          <div className="App">
          <Header />
          <Link to='/'></Link>
          <Route path='/' exact={true} component={this.state.isLoggedIn ? Home : LoginFirst} />
          </div>
      </Router>
      </ContextProvider>
    );
  }
}

export default App;


