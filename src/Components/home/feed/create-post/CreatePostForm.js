import React from 'react';
import './create-post.css';

export default function CreatePostInside(props){

    return(
    <React.Fragment>
        <div className="layoutDiv">
                <div className="pop-container">
                    {props.children}
                </div>
        </div>
    </React.Fragment>
    )
}