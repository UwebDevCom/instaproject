import React, { useContext } from 'react';
import { AppContext } from '../../AppContext/AppContext';
import DisplayGrid from '../displayGrid/DisplayGrid';
import './tagged.scss';

export default function Saved() {
    const context = useContext(AppContext);
    console.log(context.state.loggedUser)
    if(context.state.loggedUser.postMentions) {
        return <DisplayGrid path={context.state.loggedUser.postMentions} />
    }
    return (
        <div className='tagged-container'>
            <div/>    
            <h1>Photos of you</h1>
            <p>When people tag you in photos, they'll appear here.</p>
        </div>
    )
}