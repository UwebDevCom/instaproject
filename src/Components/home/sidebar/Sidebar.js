import React, {Component} from 'react';
import {Link } from 'react-router-dom';
import imageMe from './yair_image.png';
import './sidebar.css';
import MyDetailsBar from './myDetailsBar';
import StoriesBar from './StoriesBar';

class Sidebar extends Component {
    render(){
        return(
            <React.Fragment>
                        <MyDetailsBar /> 
                        <StoriesBar />               
                <div className="sugestions-friends-homepage">
                <div className="header-sidebar">
                        <p>Suggestions For You</p>
                        <p>See All</p>
                    </div>
                <div className="sugestions-sidebar">   
                    <div className="header-flex">
                       <a className="user-image"><img src={imageMe} alt='#' /></a>
                       <div className="user-top-details">
                            <div><Link to='/username'>Username</Link><p>Follows you</p></div>
                                 <button> Follow</button>
                            </div>
                       </div>  
                    </div>
                </div>
               
                <div className="footer-home-page">
                    <ul>
                        <li>About Us </li>
                        <li>Support </li>
                        <li>Press </li>
                        <li>API </li>
                        <li>Jobs </li>
                        <li>Privacy </li>
                        <li>Terms</li>
                        <li>Directory</li>
                        <li>Profiles</li>
                        <li>Hashtags</li>
                        <li>Language</li>
                    </ul>
                    <div className="right-resered">
                    © {(new Date().getFullYear())} INSTAGRAM
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Sidebar;












