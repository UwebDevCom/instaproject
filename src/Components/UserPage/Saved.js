import React, { useContext, useState, useEffect }from 'react';
import Context, { AppContext } from '../../AppContext/AppContext';
import PhotoGallery from '../PhotoGallery/PhotoGallery';
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

    if(fetchedPosts) {
        console.log('these are feyched posts: ', fetchedPosts);
        return <PhotoGallery images={{fetchedPosts}} />
    } else {
        return (
            <div className='saved-container'>
                <div/>    
                <h1>Save</h1>
                <p>Save photos and videos that you want to see again. No one is notified, and only you can see what you've saved.</p>
            </div>
        )
    }
}