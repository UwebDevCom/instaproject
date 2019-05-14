import React, {Component} from 'react';
import './sidebar.css';
import MyDetailsBar from './myDetailsBar';
import StoriesBar from './storiesBar';
import Suggestions from './suggestions';

class Sidebar extends Component {
    render(){
        return(
            <React.Fragment>
                        <MyDetailsBar /> 
                        <StoriesBar />               
                        <Suggestions />
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












