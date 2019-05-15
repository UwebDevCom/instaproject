import React, {Component} from 'react';
import UserPage from '../UserPage/';
import Home from '../home/Home';
import './appRouter.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Search from './search/Search';
import Explore from '../explore/Explore.js';
import { ContextConsumer } from '../../AppContext/';
<<<<<<< HEAD
import Footer from '../footer/Footer';
import ListBox from '../listBox/ListBox';
=======
import Footer from '../footer/footer';

>>>>>>> 893f1aba296e022ffdb8373793d107671e03de6a

class AppRouter extends Component{
		
    render(){
        return(
            <ContextConsumer>
                {(context) => {
                    if (context.state.myLoggedInUser) {
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
                                            <Link to={`/${context.state.myLoggedInUser.userName}/`} className="appRouterProfile"></Link>           
                                        </div>
                                    </div>
                                </nav>
                            </header>
                            <main>
                                <Switch>
                                    <Route exact path={'/:name/'} component={UserPage} />
                                    <Route exact path='/' component={Home}  />
                                    <Route path='/explore/' component={Explore} />
                                    <Route exact path={'/:name/followers'} component={ListBox} />
                                </Switch>
                            </main>
                            <Footer margin = "0px" />
                        </div>
                    </Router>)
                }else return <p>waiting...</p>;
                }}
            </ContextConsumer>
        )
    }
}
export default AppRouter;