import React, { useContext } from 'react';
import './nav.css';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import Search from './search/Search';
import { AppContext } from '../../AppContext/AppContext';
import CreatePost from '../home/feed/create-post/CreatePost';
import SaveLocalStorage from '../../services/localStorage.service';

export default function Nav() {        
    const context = useContext(AppContext);
    console.log(context.state.loggedUser);
     if(context.state.loggedUser) {
         const LocalStorage = new SaveLocalStorage(context.state.isLoggedIn, context.state.loggedUser);
         LocalStorage.saveUserOnLogin();
         return(      
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
                                <Link to={`/${context.state.loggedUser.userName}`} className="appRouterProfile"></Link>           
                            </div>
                        </div>
                        <CreatePost />
                    </nav>
                </header>
            </div>
        )
     }else {
         return <p>Waiting...</p>
     }
    
}
