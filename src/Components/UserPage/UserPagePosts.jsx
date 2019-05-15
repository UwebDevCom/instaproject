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

    const UlContainer = styled.ul`
        display: flex;
    `

    const Container = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 224px;
        width: 350px;
        padding: 0 44px;
        margin: 60px auto 44px auto;
    `
    const Icon = styled.div`
        width: 62px;
        height: 62px;
        background-image: url('https://www.instagram.com/static/bundles/es6/sprite_felix_2x_90d41aa74a11.png/90d41aa74a11.png');
        background-size: 180px 141px;
        background-position-x: -118px;
        background-position-y: 0px;
        align-self: center;
    `
    const Button = styled.button`
        width: 99px;
        height: 30px;
        background-color: #3897f0;
        border: 1px solid #3897f0;
        color: white;
        border-radius: 4px;
        font-weight: 600;
        font-size: 14px;
        align-self: center;    
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
                <UlContainer>
                    <li>
                        <Container>
                            <Icon></Icon>    
                            <h1>Find Facebook Friends</h1>
                            <p>You choose which friends to follow. We'll never post to Facebook without your permission.</p>
                            <Button>
                                <Link to=''>Connect to Facebook</Link>
                            </Button>
                        </Container>
                    </li>
                    <li>
                        <Container>
                            <Icon></Icon>    
                            <h1>Add Phone Number</h1>
                            <p>Add your phone number so you can reset your password, find friends and more.</p>
                            <Button>
                                <Link to=''>Connect to Facebook</Link>
                            </Button>
                        </Container>
                    </li>
                    <li>
                        <Container>
                            <Icon></Icon>    
                            <h1>Add Profile Photo</h1>
                            <p>Add a profile photo so your friends know it's you.</p>
                            <Button>
                                <Link to=''>Add Phone Number</Link>
                            </Button>
                        </Container>
                    </li>
                </UlContainer>
             </Router>
        )
    }  

}