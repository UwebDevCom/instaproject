import React from 'react';
import './Explore.css';
import BlueButton from '../blueButton/BlueButton';

export default function DiscoverUser({ user }) {
    return(
        <li className="discoverUser">
            <img className="userPctuar" src={user.userImg} />
            <div className="discoverUserName">{user.userName}</div>
            <div className="userDescription">{user.location}</div>
            <BlueButton name={"follow"}/>
        </li>
    )
};

