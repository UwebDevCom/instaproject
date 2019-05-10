import React, {Component} from 'react';
import UserPage from '../UserPage/';
import Home from '../home/Home';
import './appRouter.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Search from './search/Search';
import Explore from '../explore/Explore.js';
import { ContextConsumer } from '../../AppContext/';
import Footer from '../footer/Footer';
import ListBox from '../listBox/ListBox';
import Tagged from '../UserPage/Tagged';

class AppRouter extends Component{
		
    render(){
        return(
            <ContextConsumer>
                {(context) => {
                   return( <Router>
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
                                            <Link to={`/${context.state.allUsers[0].userName}/`} className="appRouterProfile"></Link>           
                                        </div>
                                    </div>
                                </nav>
                            </header>
                            <main>
                                <Switch>
                                    <Route exact path='/' component={Home}  />
                                    <Route exact path={`/${context.state.allUsers[0].userName}/`} component={UserPage} />
                                    <Route path='/explore/' component={Explore} />
                                    <Route  path={`/${context.state.allUsers[0].userName}/followers`} component={ListBox} />
                                </Switch>
                            </main>
                            <Footer />
                        </div>
                    </Router>)
                }}
            </ContextConsumer>
        )
    }
}
export default AppRouter;