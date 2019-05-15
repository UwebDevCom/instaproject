import React from 'react';
import './channel.css';
import { BrowserRouter as Router, Link} from 'react-router-dom';

export default function Channel() {
    return ( 
        <Router>
            <div className='channel-container'>
                <div className='channel-icon' />    
                <h1>Upload a Video</h1>
                <p>Videos must be vertical and between 15 seconds and 10 minutes long.</p>
                <button>
                    <Link to=''>Upload</Link>
                    </button>
            </div>
        </Router>
    )    
}