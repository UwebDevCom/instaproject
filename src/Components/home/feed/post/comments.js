import React, {useState} from 'react';
import Moment from 'react-moment';
 
export default function Comments(props){
    
    const [isLiked, regretLike] = useState(false);
    return(
       <div className="comments-area">
       <div className="self-comment">
       <span>{props.author} </span><span>{props.comment}</span>
       <p className="date-format-comment"><Moment toNow>{props.commentDate}</Moment></p>
       </div>
       <span className={ isLiked ? "comment-liked" : "comment-like"} onClick={() => regretLike(!isLiked)}></span>
       </div>
        )
}