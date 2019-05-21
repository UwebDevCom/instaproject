import React, { useContext } from 'react';
import './App.css';
import LoginFirst from './Components/Login-first/login-first';
import Nav from './Components/appRouter/Nav';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppContext } from './AppContext/AppContext';
<<<<<<< HEAD
import Footer from './Components/footer/Footer';
import UserPage from './Components/UserPage/';
import Home from './Components/home/Home';
import Explore from './Components/explore';
import PageNotFound from './Components/page-not-found/PageNotFound';
import PrivateRoute from './Components/auth/PrivateRoute';

export default function App() {
	const context = useContext(AppContext);
	
	return (
		<Router>
			<div className="App">
				<Nav />
					<main>
						<Switch>
							<PrivateRoute exact path='/' component={Home} />
							<PrivateRoute exact path={`/u/:name/`} component={UserPage} />
							<PrivateRoute exact path='/explore/' component={Explore} />
							<Route exact path='/login' component={LoginFirst} />
							<Route component={PageNotFound} />
						</Switch>
					</main>
				{/* <Footer margin = "0px" /> */}
			</div>
		</Router>
	);
}
=======

export default function App() {
  
  const context = useContext(AppContext);

    return (
      <div className="App">
        { context.state.isLoggedIn ? <AppRouter /> : <LoginFirst />  }
      </div>
    );
}


>>>>>>> 7146d069e2afb99a2c9702984c52e022415bb271
