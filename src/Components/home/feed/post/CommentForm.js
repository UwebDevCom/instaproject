import React, {Component} from 'react';


class CommentForm extends Component{
  constructor(props){
      super(props);
      this.commentInput = React.createRef();
  }
    render(){
        return(
            <form className="add-comment" method="POST">
                <textarea
                ref={this.textInput}
                placeholder="Add a comment…"></textarea>
                <button type="submit">Post</button>
            </form>
        )
    }
}
export default CommentForm;