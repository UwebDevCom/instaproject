import React, { useContext }from 'react';
import './app.scss';
import {BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import { AppContext } from './AppContext/AppContext';
import Footer from './Components/footer/Footer';
import UserPage from './Components/UserPage/';
import Home from './Components/home/Home';
import Explore from './Components/explore';
import PrivateRoute from './Components/auth/PrivateRoute';
import Nav from './Components/Nav/Nav';

function App() {
	const context = useContext(AppContext)
	return (
		<Router>
			<div className='App'>
			<Nav />
				<main>
					<Switch>
						<PrivateRoute exact path='/' component={Home} />
						<PrivateRoute exact path='/explore/' component={Explore} />
						<PrivateRoute exact path='/:name/' component={UserPage} />
					</Switch>
				</main>
				<Footer />
			</div>
		</Router>
	);
}

export default withRouter(App);