import React, {Component} from 'react';
import UserPage from '../UserPage/UserPage';
import Home from '../home/Home';
import './appRouter.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Search from './search/Search';
import Explore from '../explore/Explore';

class AppRouter extends Component{
		
    render(){
        return(
            <Router>
            <div>
                <header className="sticky">
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
<<<<<<< HEAD
                    <Route exact path='/' component={Home} />
                    <Route exact path='/explore' render={() => <h1>explore</h1>} />
=======
                    <Route exact path='/' component={Home}  />
                    <Route exact path='/explore' component={Explore} />
>>>>>>> 3e87c2ac1d8d8fbad2e361fd6e263cc3ea86f251
                </main>
            </div>
            </Router>
        )
    }
}
export default AppRouter;