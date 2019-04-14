import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import LoginFirst from './Components/Login-first/login-first';
import AppRouter from './Components/appRouter/AppRouter';
import ContextProvider from './AppContext/AppContext';
import { ContextConsumer } from './AppContext/AppContext';

class App extends Component {
  render() {
    return (
      <ContextProvider>
        <BrowserRouter>
          <div className="App">
          <Link to='/'></Link>
          <ContextConsumer>
            {(context)=>(
              <React.Fragment>
                <Route path='/' exact={true} render={()=>context.state.isLoggedIn ? <AppRouter /> : <LoginFirst />} />
              </React.Fragment>
            )}
          </ContextConsumer>
          </div>
      </BrowserRouter>
      </ContextProvider>
    );
  }
}

export default App;


