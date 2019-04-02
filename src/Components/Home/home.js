import React, {Component} from 'react';
import Header from'../header/Header.js';
import UserPage from '../UserPage/';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Home extends Component{
    state = {

    }
    render(){
        return(
            <Router>
                <div>
                    <Header/>
                    <Route path='/user' exact={true} render={()=> <UserPage />} />
                </div>
            </Router>
        )
    }
}
export default Home;

