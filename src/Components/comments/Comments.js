import React , {Component} from 'react';
import 'comments.css';


class Comments extends Component{

    render(){
        if (1 > 0) {
            return(
                <React.Fragment>
                    <div>
                    <Comment></Comment>
                    </div>
                </React.Fragment>
            )
        }else {
            return <div></div>
        }
    }
}

export default Comments;

