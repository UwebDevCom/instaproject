import React , {Component} from 'react';
import {Link, BrowserRouter as Router} from 'react-router-dom';
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
            userLoggedIn: this.props.user,
            hasComments: false
        }
    }
    
    savedPost(myUserId,saved){
        const isSaved = saved.includes(this.state._id);

        if (!isSaved) {
            saved.push(this.state._id);
            this.setState({
                saved: this.state.saved ? false : true
            });
            updateSavedPost.savePost(myUserId,{savedPosts: saved});
        }else{
            saved = saved.filter(postId=> postId !== this.state._id );
            this.setState({
                saved: this.state.saved ? false : true
            });
            updateSavedPost.savePost(myUserId,{savedPosts: saved});
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
        if (this.state.userLoggedIn.savedPosts.includes(this.state._id)) {
            this.setState({
                saved: this.state.saved ? false : true
                 }) 
         }
    }
    spillComments(){
        this.setState({
            hasComments: !this.state.hasComments,
             }) 
    }
    render() { 
        return(
            <Router>
            <React.Fragment>
                <ContextConsumer>
                    {(context)=>{
                        if (this.state.author) {
                    return(
        <article id={this.state._id} className="post-wrap">
            <header className="post-header">
               <div className="header-flex">
             <Link to={`/${context.state.myLoggedInUser.userName}`} className="user-image"><img src={this.state.author.userImg} alt={context.state.myLoggedInUser._id}/></Link>
                <div className="post-user-top-details"><Link to='/username'>{this.state.author.name}</Link><p>{this.state.author.location}</p></div>
               </div>
                <p href="#" className="post-settings">...</p>
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
                  {this.state.comments.length > 1 && !this.state.hasComments ?
                  <button
                  onClick={()=>this.spillComments()}>
                  View all {this.state.comments.length} comments</button> : '' }
                </div>
                

                {this.state.hasComments ?
                    this.state.comments.map((comment,i,arr)=>
                        <Comments
                            key={comment._id}
                            comment={comment.body}
                            author={comment.author.userName}
                            commentDate={comment.published} /> ) :
                            this.state.comments.length >= 1 ? 
                <Comments
                key={this.state.comments[this.state.comments.length-1]._id}
                comment={this.state.comments[this.state.comments.length-1].body}
                author={this.state.comments[this.state.comments.length-1].author.userName}
                commentDate={this.state.comments[this.state.comments.length-1].published} />  : '' }
                    


                {}
            </div>
           </div>
           <div className="add-a-comment">
              <CommentForm authorId={context.state.myLoggedInUser._id} postId={this.state._id} commentsArr={this.state.comments} />
            </div>
        </article>
        )} else return (<p>no posts</p>)}}
        </ContextConsumer>
            </React.Fragment>
            </Router>
        )
    }
}
export default Post;