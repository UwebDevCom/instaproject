import React, {Component} from 'react';
import UserPage from '../UserPage/UserPage';
import Home from '../home/Home';
import './appRouter.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Search from './search/Search';

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
                        <Search />
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
                    <Route exact path='/explore' render={() => <h1>explore</h1>} />
                </main>
            </div>
            </Router>
        )
    }
}
export default AppRouter;