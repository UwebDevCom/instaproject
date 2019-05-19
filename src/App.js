import React, { useContext } from 'react';
import './App.css';
import LoginFirst from './Components/Login-first/login-first';
import AppRouter from './Components/appRouter/AppRouter';
import { AppContext } from './AppContext/AppContext';





export default function App() {
  const context = useContext(AppContext);
    
  

  let localData = localStorage.getItem('myData');
  
   if ( localData == null  || localData==="false") {
    localStorage.setItem('myData', !context.state.isLoggedIn);
   
    return (
      <div className="App">
        { context.state.isLoggedIn ? <AppRouter /> : <LoginFirst />  }
      </div>
);
    }else {
      localData = localStorage.getItem('myData');
      return (
        <div className="App">
          { context.state.isLoggedIn || localData=="true" ? <AppRouter /> : <LoginFirst />  }
        </div>
  );
    }

   
    
}


