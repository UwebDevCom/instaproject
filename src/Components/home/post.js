import React , {Component} from 'react';
import {Link } from 'react-router-dom';
class Post extends Component{
    constructor(props) {
        super(props);
        this.state = {
            ...this.props.post,
            isLiked: false}
    }
    
    formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
      }
      toggleLike(){
        this.setState({isLiked: !this.state.isLiked})
      }

    render() {
        return(
            <React.Fragment>
        <article id={this.state._id} className="post-wrap">
            <header className="post-header">
               <div className="header-flex">
               <a className="user-image"><img src={this.state.author.userImg} alt={this.state.author._id}/></a>
                <div className="user-top-details"><Link to='/username'>{this.state.author.name}</Link><p>{this.state.author.location}</p></div>
               </div>
                <a className="post-settings">...</a>
            </header>
            <div className="visual"><img src={this.state.image} alt="" /></div>
           <div className="interaction">
           <div className="features">
              <div className="buttons">
              <button><span onClick={()=>this.toggleLike()} className={this.state.isLiked? 'like-btn liked':'like-btn unliked'}></span></button> 
              <button><span className="comment-btn"></span></button> 
              <button><span className="share-btn"></span></button> 
              </div>
              <div className="save-it">
              <button><span className="save-btn"></span></button> 
              </div>
           </div>
           <div className="like-counter">
               <p>{this.formatNumber(this.state.likes)} likes</p>
           </div>
           <div className="caption">
               <p><span>{this.state.author.userName}</span> {this.state.caption} likes</p>
           </div>
            <div className="comments"></div>
           </div>
           <div className="add-a-comment">
                <form className="add-comment" method="POST">
                <textarea placeholder="Add a comment…"></textarea>
                <button type="submit">Post</button>
                </form>
            </div>
        </article>
            </React.Fragment>
        )
    }
}
export default Post;