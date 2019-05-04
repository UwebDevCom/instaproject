import React from 'react';
import imageMe from './yair_image.png';
import {Link } from 'react-router-dom';


export default function StoriesBar(){

    return (
         <div className="stories-home-page">
          
            <div className="header-sidebar">
                <p>Stories</p>
                <p>Watch All</p>
            </div>

            <div className="stories-container-sidebar">
                <div className="story-sidebar">        
                    <div className="header-flex">
                        <a className="user-image"><img src={imageMe} alt='#' /></a>
                        <div className="story-top-details"><Link to='/username'>Username</Link><p>19 hours ago</p></div>
                    </div>  
                </div>
            </div>

        </div>
    )
}