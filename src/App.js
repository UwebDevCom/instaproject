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
  loginHandler = () =>{
  this.setState({
    isLoggedIn: true
  });
  }
  render() {
    return (
      <Router>
      <div className="App" >
      <Link to='/'></Link>
      <Route path='/' exact={true}
        render={()=>(
          <div>{this.state.isLoggedIn ? <Home /> : <LoginFirst logIn={()=>this.loginHandler} />}</div>)} />
      </div>
      </Router>
    );
  }
}

export default App;
