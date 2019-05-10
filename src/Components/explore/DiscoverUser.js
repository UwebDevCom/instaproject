import React from 'react';
import './Explore.css';

export default function DiscoverUser({ props }) {
    return(
        <div className="discoverUser">
            <div className="userPctuar">
                <img className="userPctuar" src={props.userImg} />
            </div>
            <div className="discoverUserName">{props.userName}</div>
            <div className="userDescription">{props.location}</div>
            <button className="exploreFollowButton">follow</button>
        </div>
    )
};

