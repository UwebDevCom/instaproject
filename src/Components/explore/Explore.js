import React, { useContext, useEffect }from 'react';
import './Explore.css';
import DiscoverUser from './DiscoverUser';
import { AppContext } from '../../AppContext/AppContext';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserPagePosts from '../UserPage/UserPagePosts';


export default function Explore() {
    const context = useContext(AppContext);

    useEffect(()=> {
        const user = context.actions.allUsers()
        console.log('suggest users comp: ', user)
    }, []);

    return ( 
        <Router>
            <div className="explorContainer">
                <div className="explorPage">
                    <div className="dicoverConteiner">
                        <div className="dicoverHeader">Discover People
                            <a className="seeAll" href="">see all</a>  {/*   need href */}
                        </div>
                        <div className="dicoverAllUserContainer">
                            <ul className="dicoverAllUser">
                                <div className="leftArrow">
                                    {/* <button></button> */}
                                </div>    
                                {context.state.allUsers.map(user => <DiscoverUser user={user} />)}
                                <div className="rightArrow">
                                    {/* <button></button> */}
                                </div>
                            </ul>
                            
                        </div>
                    </div>
                    <div className="exploreContianer">
                                <Route exact path={`/:name/`} component={UserPagePosts} />
                        <div className=""></div>
                    </div>
                </div>
            </div>
        </Router>
    )   
}