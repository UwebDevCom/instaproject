import React, {Component} from 'react';
import './feed.css';
import Post from './post/post';
import { ContextConsumer } from '../../../AppContext/AppContext';
import CreatePost from './create-post/CreatePost';
class Feed extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
         <React.Fragment>
             <ContextConsumer>
             {(context)=> {
                if  (context.state.myLoggedInUser) {
                    return context.state.allPosts.map((post)=>
                    post.map(inPost=>
                    <Post userId ={context.state.myLoggedInUser._id}
                    key={post._id} post={inPost}
                    user = {context.state.myLoggedInUser}
                    postComments = {context.state.comments} />))
                }else {
                    return <button>Refresh here</button>
                }
            }
            }
             </ContextConsumer>
             <CreatePost />
         </React.Fragment>
        )
    }
}

export default Feed;