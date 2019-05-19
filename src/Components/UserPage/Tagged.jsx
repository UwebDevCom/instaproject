import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';
import DisplayGrid from '../displayGrid';
import './tagged.css';

export default function Saved() {
    const context = useContext(AppContext);
    console.log(context.state.myLoggedInUser)
    if(context.state.myLoogedInUser.postMentions) {
        return <DisplayGrid path={context.state.myLoogedInUser.postMentions} />
    }
    return (
        <div className='tagged-container'>
            <div/>    
            <h1>Photos of you</h1>
            <p>When people tag you in photos, they'll appear here.</p>
        </div>
    )
}