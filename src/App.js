import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import LoginFirst from './Login-first/login-first';
import Home from './Home/home';
import ContextProvider from './AppContext/AppContext';
import { ContextConsumer } from './AppContext/AppContext';

class App extends Component {
  render() {
    return (
      <ContextProvider>
        <Router>
          <div className="App">
          <Link to='/'></Link>
          <ContextConsumer>
            {(context)=>(
              <React.Fragment>
                <Route path='/' exact={true} render={()=>context.state.isLoggedIn ? <Home /> : <LoginFirst />} />
              </React.Fragment>
            )}
          </ContextConsumer>
          </div>
      </Router>
      </ContextProvider>
    );
  }
}

export default App;


