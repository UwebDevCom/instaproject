import React, {Component} from 'react';
import UserPage from '../UserPage/UserPage';
import Header from '../header/Header';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class AppRouter extends Component{
    state = {

    }
    render(){
        return(
            <Router>
            <div>
                <nav>
                    <Link to='/userpage'>Profile</Link>      
                    <Link to='/explore'>Explore</Link>  

                </nav>
                <main>
                    <Route exact path='/userpage' component={UserPage} />
                    <Route exact path='/explore' component={Header} />
                </main>
            </div>
            </Router>
        )
    }
}
export default AppRouter;

