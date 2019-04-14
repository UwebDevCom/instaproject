import React, {Component} from 'react';
import UserPage from '../UserPage/UserPage';
import Header from '../header/Header';
import Home from '../home/Home';
import './appRouter.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class AppRouter extends Component{
		
    render(){
        return(
            <Router>
            <div>
                <header>
                <nav className="Header">
                <Link to='/'>Home</Link> 
                    <Link to='/userpage'>Profile</Link>           
                    <Link to='/explore'>Explore</Link>  

                </nav>
                </header>
                <main>
                    <Route exact path='/userpage' component={UserPage} />
                    <Route exact path='/' component={Home} />
                    <Route exact path='/explore' component={Header} />
                    <Route exact path='/username' component={UserPage} />
                </main>
            </div>
            </Router>
        )
    }
}
export default AppRouter;