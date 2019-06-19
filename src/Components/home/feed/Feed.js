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
                    context.actions.getPosts(context.state.loggedUser._id);
                }

                if (context.state.loggedUser) {
                    return context.state.allPosts.map((post)=>
                        post.map(inPost=>
                            <Post userId ={context.state.loggedUser._id}
                                key={post._id} post={inPost}
                                user = {context.state.loggedUser}
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