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
                <nav className="appRouterHeader">
                    <div className="appRouterHeaderFlex">
                        <Link to='/' className="appRouterLogoFlex">
                            <div className="appRouterCameraLogo"></div>
                            <div className="appRouterLine"></div>
                            <div className="appRouterWordLogo"></div>
                        </Link>
                        <div className="appRouterSearchBox">
                            <input type="text" placeholder="search"></input>
                        </div> 
                        <div className="appRouterLitleButtons">
                            <Link to='/explore' className="appRouterExplore"></Link> 
                            <div className="appRouterActivity"></div> 
                            <Link to='/userpage' className="appRouterProfile"></Link>           
                        </div>
                    </div>
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