import React from 'react';
import './getTheApp.scss';

export default function GetTheApp() {
    return (
        <div className='getTheApp-container'>
            <p>Get the app.</p>
            <div className='links'>
                <a href='#'>
                    <img src='https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png'/>
                </a>
                <a href='#'>
                    <img src='https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png'/>
                </a>
            </div>
        </div>
    )
}
