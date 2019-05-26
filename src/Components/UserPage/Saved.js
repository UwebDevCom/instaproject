import React, { useContext, useState, useEffect }from 'react';
import Context, { AppContext } from '../../AppContext/AppContext';
import DisplayGrid from '../displayGrid/DisplayGrid';
import PostsService from '../../services/posts.Service';
import './saved.scss';

export default function Saved() {
    const context = useContext(AppContext);
    const [ fetchedPosts, setPosts ] = useState();
    

    async function fetchPosts(userId) {
        const postsData = new PostsService();
        const response = await postsData.loggedUserSavedPosts(userId);
        console.log('response posts', response);
        return response
    }

    useEffect(() => {
        const posts = fetchPosts(context.state.loggedUser._id);
        console.log('effect posts', posts)
        setPosts(posts)
    }, [])

    if(context.state.loggedUser) {
        console.log('this state',fetchedPosts)
        // return <DisplayGrid path={context.state.loggedUser.savedPosts} />
    }
    return (
        <div className='saved-container'>
            <div/>    
            <h1>Save</h1>
            <p>Save photos and videos that you want to see again. No one is notified, and only you can see what you've saved.</p>
        </div>
    )
}