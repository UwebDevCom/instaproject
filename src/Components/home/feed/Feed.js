import React, {Component} from 'react';
import './feed.css';
import Post from '../post';
import { ContextConsumer } from '../../../AppContext/AppContext';
class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        } 
    }
    
    render(){
        return(
         <React.Fragment>
             <ContextConsumer>
             {(context)=> {
                if  (context.state.allPosts) {
                    return context.state.allPosts.map(post=><Post key={post._id} post={post} />)
                }else {
                    return <button>Refresh here</button>
                }
            }
            }
             </ContextConsumer>
         </React.Fragment>
        )
    }
}

export default Feed;