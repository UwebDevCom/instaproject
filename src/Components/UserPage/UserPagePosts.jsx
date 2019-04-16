import React, { useState, useEffect} from 'react';
import './userPagePosts.css';

export default function UserPagePosts() {
    const [posts, setPost] = useState();
    
    async function fetchUsers() {
        let response = await fetch('http://localhost:8080/api/posts')
        let data = await response.json();
        setPost(data);
        console.log(data, 'data')
    }

    useEffect(() => {
        fetchUsers();
    }, [])
    
    if (!posts) {
       return 'loading...'
    } else {
       return posts.map(post => 
            <div key={post._id} className='userPosts'>
                    <img className='userPosts-img' alt='' src={post.image[0]}/>
            </div>
       )
    }
}
