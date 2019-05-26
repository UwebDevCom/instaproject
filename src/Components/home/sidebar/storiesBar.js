import React, {useContext} from 'react';
import imageMe from './yair_image.png';
import {Link } from 'react-router-dom';
import {AppContext} from '../../../AppContext/AppContext'; 
export default function StoriesBar(){

    const context = useContext(AppContext);
    return (
        
         <div className="stories-home-page">
          
            <div className="header-sidebar">
                <p>Stories</p>
                <p>Watch All</p>
            </div>

            <div className="stories-container-sidebar">
                <div className="story-sidebar">        
                    <div className="header-flex">
                        <Link to={`/${context.state.loggedUser.userName}/`} className="user-image"><img src={imageMe} alt='static img' /></Link>
                        <div className="story-top-details"><Link to='/username'>Username</Link><p>19 hours ago</p></div>
                    </div>  
                </div>
            </div>
        </div>
    )
}