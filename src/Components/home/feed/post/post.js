import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import PostsService from '../../../../services/posts.Service';
import UserService from '../../../../services/users.service';
import Comments from './comments';
import { ContextConsumer } from '../../../../AppContext/AppContext';
import CommentForm from './CommentForm';

const updateLikeInPost = new PostsService();
const updateSavedPost = new UserService();
class Post extends Component{
    constructor(props) {
        super(props);
        this.state = {
            ...this.props.post,
            isLiked: null,
            saved: null,
            userLoggedIn: null
        }
    }
    
    savedPost(myUserId,saved){
        

        const isSaved = saved.includes(this.state._id);
        console.log(isSaved);
        if (!isSaved) {
            saved.push(this.state._id);
            this.setState({
                saved: this.state.saved ? false : true
            });
            updateSavedPost.savePost(myUserId,{savedPosts: saved});
        }else{
            saved.filter(postId=> postId !== this.state._id );
            this.setState({
                saved: this.state.saved ? false : true
            });
        }
    }



    async functionLike(postId,userId){
       await updateLikeInPost.updatePostLikes(postId,userId);
       let x = await updateLikeInPost.fetchSinglePost(postId);
       this.setState({
        likes: x.likes,
        isLiked: x.likes.includes(userId) ? true : false
    });
    }
    componentDidMount(){
        if (this.state.likes) {
            this.setState({
                isLiked: this.state.likes.includes(this.props.userId) ? true : false, 
                 })  
                }
    }
    render() { 
        return(
            <React.Fragment>
                <ContextConsumer>
                    {(context)=>{
                        if (this.state.author) {
                    return(
        <article id={this.state._id} className="post-wrap">
            <header className="post-header">
               <div className="header-flex">
             <a className="user-image"><img src={this.state.author.userImg} alt={context.state.myLoggedInUser._id}/></a>
                <div className="post-user-top-details"><Link to='/username'>{this.state.author.name}</Link><p>{this.state.author.location}</p></div>
               </div>
                <a className="post-settings">...</a>
            </header>
            <div className="visual"><img src={this.state.image} alt="" /></div>
           <div className="interaction">
           <div className="features">
              <div className="buttons">
              <button><span onClick={()=>this.functionLike(this.state._id,context.state.myLoggedInUser._id)} className={this.state.isLiked? 'like-btn liked':'like-btn unliked'}></span></button> 
              <button><span className="comment-btn"></span></button> 
              <button><span className="share-btn"></span></button> 
              </div>
              <div className="save-it">
              <button onClick={()=>{this.savedPost(context.state.myLoggedInUser._id,context.state.myLoggedInUser.savedPosts)}}><span className={ this.state.saved ? "post-saved" : "save-btn"}></span></button> 
              </div>
           </div>
           <div className="like-counter">
               <p>{this.state.likes.length} likes</p>
           </div>
           <div className="caption">
               <p><span>{this.state.author.userName}</span> {this.state.caption}</p>
           </div>
            <div className="comments">
                <div className="view-all-comments">
                  {this.state.comments.length > 1 ? <Link to={`/${this.state._id.toString()}`}>View all {this.state.comments.length} comments</Link> : '' }  
                </div>
                {this.state.comments.length > 1 ? this.state.comments.map((comment,i,arr)=> i > arr.length-2 ? <Comments key={comment._id} comment={comment.body} author={comment.author.userName} commentDate={comment.published} />: ''): ''}
            </div>
           </div>
           <div className="add-a-comment">
              <CommentForm />
            </div>
        </article>
        )} else return (<p>no posts</p>)}}
        </ContextConsumer>
            </React.Fragment>
        )
    }
}
export default Post;