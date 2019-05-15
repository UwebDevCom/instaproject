import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../AppContext';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styled from 'styled-components';
import './userPagePosts.css';

export default function UserPagePosts() {
    const context = useContext(AppContext);

    useEffect(() => {
        context.getUserPosts(context.state.myLoggedInUser._id) 
    },[])

    const Container = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 224px;
        width: 350px;
        padding: 0 44px;
        margin: 60px auto 44px auto;
    `

    if (context) {
        return context.state.loggedUserPosts.map(post =>  
            <div key={post._id} className='userPosts-div'>
                    <img className='userPosts-img' alt='' src={post.image}/>
            </div>
        )
    } else {
        return (
            <Router>
                <Container>
                    <div className='channel-icon' />    
                    <h1>Upload a Video</h1>
                    <p>Videos must be vertical and between 15 seconds and 10 minutes long.</p>
                    <button>
                        <Link to=''>Upload</Link>
                        </button>
                </Container>
             </Router>
        )
    }  

}
