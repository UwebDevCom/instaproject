import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import PostsService from '../../../../services/posts.Service';
import UserService from '../../../../services/users.service';
import Comments from './comments';
import { ContextConsumer } from '../../../../AppContext/AppContext';

const updateLikeInPost = new PostsService();
const updateSavedPost = new UserService();
class Post extends Component{
    constructor(props) {
        super(props);
        this.state = {
            ...this.props.post,
            isLiked: false,
            saved: false
        }
    }
    
    formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
      }
      toggleLike(){
        this.setState({
            isLiked: !this.state.isLiked
        })      
    }
    updateLikes(){
        this.setState({
            likes: this.state.isLiked ? this.state.likes - 1: this.state.likes +1
        })
    }
    
    savedPost(myUserId,saved){
        saved.push(this.state._id);
        this.setState({
            saved: this.state.saved ? false : true
        })
        console.log(saved);
        updateSavedPost.savePost(myUserId,{savedPosts: saved});
    }

    functionLike(){
       this.toggleLike();
       this.updateLikes();
    }

    render() {
        updateLikeInPost.updatePost({likes:this.state.likes}, this.state._id);
        return(
            <React.Fragment>
                <ContextConsumer>
                    {(context)=>{
                    return(
        <article id={this.state._id} className="post-wrap">
            <header className="post-header">
               <div className="header-flex">
               <a className="user-image"><img src={this.state.author.userImg} alt={this.state.author._id}/></a>
                <div className="post-user-top-details"><Link to='/username'>{this.state.author.name}</Link><p>{this.state.author.location}</p></div>
               </div>
                <a className="post-settings">...</a>
            </header>
            <div className="visual"><img src={this.state.image} alt="" /></div>
           <div className="interaction">
           <div className="features">
              <div className="buttons">
              <button><span onClick={()=>this.functionLike()} className={this.state.isLiked? 'like-btn liked':'like-btn unliked'}></span></button> 
              <button><span className="comment-btn"></span></button> 
              <button><span className="share-btn"></span></button> 
              </div>
              <div className="save-it">
              <button onClick={()=>{this.savedPost(context.state.myUser._id,context.state.myUser.savedPosts)}}><span className={ this.state.saved ? "post-saved" : "save-btn"}></span></button> 
              </div>
           </div>
           <div className="like-counter">
               <p>{this.formatNumber(this.state.likes)} likes</p>
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
                <form className="add-comment" method="POST">
                <textarea placeholder="Add a comment…"></textarea>
                <button type="submit">Post</button>
                </form>
            </div>
        </article>
        )}}
        </ContextConsumer>
            </React.Fragment>
        )
    }
}
export default Post;