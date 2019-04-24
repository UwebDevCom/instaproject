import React, {Component} from 'react';
import UserPage from '../UserPage/UserPage';
import Home from '../home/Home';
import './appRouter.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class AppRouter extends Component{
		
    render(){
        return(
            <Router>
            <div>
                <header>
                <nav className="header">
                    <div className="headerFlex">
                        <Link to='/' className="home"></Link>
                        <div>
                            <input className="search" type="text" placeholder="search"></input>
                        </div> 
                        <div className="litleButtons">
                            <Link to='/explore' className="explore"></Link> 
                            <div className="activity"></div> 
                            <Link to='/userpage' className="profile"></Link>           
                        </div>
                    </div>
                </nav>
                </header>
                <main>
                    <Route exact path='/userpage' component={UserPage} />
                    <Route exact path='/' component={Home} />
                    <Route exact path='/username' component={UserPage} />
                </main>
            </div>
            </Router>
        )
    }
}
export default AppRouter;