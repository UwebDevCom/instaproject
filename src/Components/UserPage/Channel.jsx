import React, { useState, useEffect} from 'react';
import './channel.css';

export default function Channel() {
    return (
        <div className='channel-container'>
            <div/>    
            <h1>Upload a Video</h1>
            <p>Videos must be vertical and between 15 seconds and 10 minutes long.</p>
            <button>Upload</button>
        </div>
    )
}