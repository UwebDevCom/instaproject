import React, {Component} from 'react';
import CommentService from '../../../../services/comment.service'

class CommentForm extends Component{
  constructor(props){
      super(props);
      this.textInput = React.createRef();
  }


  createComment(event,txt) {
    const commentsService = new CommentService();
    event.preventDefault();
    const comment = {
        body: txt,
        author: this.props.authorId
    }
    const x = commentsService.createComment(comment);
    console.log(x);

  }


    render(){
        return(
            <form className="add-comment" method="POST" onSubmit={(event)=>this.createComment(event,this.textInput.current.value)}>
                <textarea
                ref={this.textInput}
                placeholder="Add a comment…"></textarea>
                <button type="submit">Post</button>
            </form>
        )
    }
}
export default CommentForm;