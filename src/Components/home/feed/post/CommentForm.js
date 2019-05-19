import React, {Component} from 'react';
import CommentService from '../../../../services/comment.service'

class CommentForm extends Component{
  constructor(props){
      super(props);
      this.textInput = React.createRef();
  }


  createComment(event,txt,postId,commentsArr) {
    const commentsService = new CommentService();
    event.preventDefault();
    const comment = {
        body: txt,
        author: this.props.authorId
    }
    commentsService.createComment(comment,postId,commentsArr);
    const com = this.props.addCommentFn(this.textInput.current.value);
    console.log(com, this.textInput.current.value)
    this.textInput.current.value = '';
  }

    render(){
        return(
            <form className="add-comment" method="POST" onSubmit={(event)=>this.createComment(event,this.textInput.current.value,this.props.postId, this.props.commentsArr)}>
                <textarea
                ref={this.textInput}
                placeholder="Add a comment…"></textarea>
                <button type="submit">Post</button>
            </form>
        )
    }
}
export default CommentForm;