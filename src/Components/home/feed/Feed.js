import React, {Component} from 'react';
import './feed.css';
import Post from './post/post';
import { ContextConsumer } from '../../../AppContext/AppContext';

class Feed extends Component {
    render(){
        return(
         <React.Fragment>
             <ContextConsumer>
             {(context)=> {
                if (context.state.allPosts.length <= 0 ) {
                    context.getPosts(context.state.myLoggedInUser._id);
                }

                if (context.state.myLoggedInUser) {
                    return context.state.allPosts.map((post)=>
                        post.map(inPost=>
                            <Post userId ={context.state.myLoggedInUser._id}
                                key={post._id} post={inPost}
                                user = {context.state.myLoggedInUser}
                                postComments = {context.state.comments}
                            />))
                }else {
                    return <button>Refresh here</button>
                }
                
            }}
             </ContextConsumer>
         </React.Fragment>
        )
    }
}

export default Feed;