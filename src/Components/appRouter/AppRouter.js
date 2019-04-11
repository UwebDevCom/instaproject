import React, {Component} from 'react';
import UserPage from '../UserPage/UserPage';
import Header from '../header/Header';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './appRouter.css';

class AppRouter extends Component{
		render(){
				return(
						<Router>
						<div>
							<nav className='navigation'>
									<Link className='routerLink' to='/userpage'>Profile</Link>
									<Link className='routerLink' to='/explore'>Explore</Link>
									<Link className='routerLink' to='/'>homePage</Link>										
							</nav>
							<main className='mainRouter'>
									<Route exact path='/userpage' component={UserPage} />
									<Route exact path='/explore' component={Header} />
									<Route exact path='/' component={AppRouter} />
							</main>
						</div>
						</Router>
				)
		}
}
export default AppRouter;

