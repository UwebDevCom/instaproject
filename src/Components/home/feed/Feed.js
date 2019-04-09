import React, {Component} from 'react';
import './feed.css';
import {GetPosts} from './Posts.Service';

class Feed extends Component {
    state = {
        posts: []
    } 
    render(){
        return(
         <React.Fragment>
             <GetPosts likes={82} />
         </React.Fragment>
        )
    }
}

export default Feed;