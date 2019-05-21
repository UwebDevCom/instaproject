import React, {Component} from 'react';
import './nav.css';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import Search from './search/Search';
import { ContextConsumer } from '../../AppContext/AppContext';


export default class Nav extends Component{        
    render() {
        return(
            <ContextConsumer>
                {(context) => {
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
                                            <Link to='/explore/' className="appRouterExplore"></Link> 
                                            <div className="appRouterActivity"></div> 
                                            {/* <Link to={`/${context.state.myLoggedInUser.userName} /`} className="appRouterProfile"></Link>            */}
                                        </div>
                                    </div>
                                </nav>
                            </header>
                        </div>
                    </Router>)
                }}
            </ContextConsumer>
        )
    }
}
