import React, { useContext }from 'react';
import './app.scss';
import LoginFirst from './Components/Login-first/login-first';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppContext } from './AppContext/AppContext';
import Footer from './Components/footer/footer';
import UserPage from './Components/UserPage/';
import Home from './Components/home/Home';
import Explore from './Components/explore';
import PageNotFound from './Components/page-not-found/PageNotFound';
import PrivateRoute from './Components/auth/PrivateRoute';

export default function App() {
	const context = useContext(AppContext)
	return (
		<Router>
			<div className='App'>
				<main>
					<Switch>
						<Route exact path='/login' component={LoginFirst} />
						<PrivateRoute exact path='/' component={Home} />
						<PrivateRoute exact path={`/u/:name/`} component={UserPage} />
						<PrivateRoute exact path='/explore/' component={Explore} />
						<Route component={PageNotFound} />
					</Switch>
				</main>
				<Footer />
			</div>
		</Router>
	);
}
