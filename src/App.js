import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import LoginFirst from './Components/Login-first/login-first';
import AppRouter from './Components/appRouter/AppRouter';
import Context from './AppContext/AppContext';
import { ContextConsumer } from './AppContext/AppContext';

export default function App() {
    return (
      <Context>
        <BrowserRouter>
          <div className="App">
          <ContextConsumer>
            {(context)=>(
              <React.Fragment>
                { context.state.isLoggedIn ? <AppRouter /> : <LoginFirst /> }
              </React.Fragment>
            )}
          </ContextConsumer>
          </div>
      </BrowserRouter>
      </Context>
    );
}

