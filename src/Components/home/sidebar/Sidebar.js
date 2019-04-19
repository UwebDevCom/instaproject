import React, {Component} from 'react';
import {Link } from 'react-router-dom';
import imageMe from './yair_image.png';
import './sidebar.css';

class Sidebar extends Component {
    render(){
        const userId='fsdf';
        return(
            <React.Fragment>
                <div className="me-profile">
                    <Link className="image-profile-sidebar" to={`/${userId}`}> <img src={imageMe} alt="#" /> </Link>
                   
                   <div className="me-profile-content">
                   <Link to={`/${userId}`}> user name here </Link>
                    <p>full name</p>
                   </div>
                </div>
                <div className="stories-home-page">
                    <div className="stories-header-sidebar">
                        <p>Stories</p>
                        <p>Watch All</p>
                    </div>
                    <div className="stories-container-sidebar">
                        <div className="story-sidebar">
                        <header className="post-header">
               <div className="header-flex">
               <a className="user-image"><img src={imageMe} alt='#' /></a>
                <div className="user-top-details"><Link to='/username'>sdf</Link><p>sdf</p></div>
               </div>
            </header>   
                        </div>
                    </div>
                </div>
                <div className="sugestions-friends-homepage"></div>
                <div className="footer-home-page"></div>
            </React.Fragment>
        )
    }
}

export default Sidebar;