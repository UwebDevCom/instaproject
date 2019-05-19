import React, {Component} from 'react';
import UserPage from '../UserPage/';
import Home from '../home/Home';
import './appRouter.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Search from './search/Search';
import Explore from '../explore/Explore.js';
import { ContextConsumer } from '../../AppContext/';
import Footer from '../footer/footer';
import ListBox from '../listBox';
import PageNotFound from '../page-not-found';


class AppRouter extends Component{
        
    fetchLocalStorage(myUser, postss){
        if (!localStorage.getItem('myUserData')) {
            localStorage.setItem('myUserData', JSON.stringify(myUser));
            }
            console.log(myUser,JSON.parse(localStorage.getItem('myUserData')));
            myUser(JSON.parse(localStorage.getItem('myUserData')));
            postss(JSON.parse(localStorage.getItem('istheUser'))); 
        }
        
    render(){
        return(
            <ContextConsumer>
                {(context) => {
                    if (!context.state.myLoggedInUser) { 
                        this.fetchLocalStorage(context.myUser, context.getPosts);
                    }
                    
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
                                            <Link to='/explore/' className="appRouterExplore"></Link> 
                                            <div className="appRouterActivity"></div> 
                                            <Link to={`/${context.state.myLoggedInUser.userName} /`} className="appRouterProfile"></Link>           
                                        </div>
                                    </div>
                                </nav>
                            </header>
                            <main>
                                <Switch>
                                    <Route exact path='/' component={Home}  />
                                    <Route exact path={`/${context.state.myLoggedInUser.userName}/`} component={UserPage} />
                                    <Route exact path='/explore/' component={Explore} />
                                    <Route exact path={'/:name/followers'} component={ListBox} />
                                    <Route component={PageNotFound} />
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