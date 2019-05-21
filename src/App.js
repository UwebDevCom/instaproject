import React, { useContext } from 'react';
import './App.css';
import LoginFirst from './Components/Login-first/login-first';
import AppRouter from './Components/appRouter/AppRouter';
import { AppContext } from './AppContext/AppContext';

export default function App() {
  
  const context = useContext(AppContext);

    return (
      <div className="App">
        { context.state.isLoggedIn ? <AppRouter /> : <LoginFirst />  }
      </div>
    );
}


