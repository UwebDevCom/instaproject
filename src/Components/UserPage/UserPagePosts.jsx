import React, { useState, useEffect} from 'react';
import { ContextConsumer } from '../../AppContext'
import './userPagePosts.css';

export default function UserPagePosts() {
    return (
        <ContextConsumer>
            {
                (context) => {
                    if (!context) {
                        return <p>no data to load</p>
                    } else {
                    return context.state.allPosts.map(post =>  
                        <div key={post._id} className='userPosts-div'>
                                <img className='userPosts-img' alt='' src={post.image[0]}/>
                        </div>
                    )}
                }
            }
            
            
        </ContextConsumer>
)
}
