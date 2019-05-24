import React ,{useState, useEffect, useRef}  from 'react';
import './create-post.css';
import PostsService from '../../../../services/posts.Service';

const CreatePost = new PostsService();

export default function createPost(props){

    //const [isPost , addPost] = useState(false);
    const [isBtnClickedClose, changeBtnClose] = useState(false);
    const [currentCaption, changeCaption] = useState("");
    //const inputEl = useRef(null);
   // inputEl.current.value;



    // useEffect for making the preveiw
    // useEffect(() => {
    
    //   return () => {
    //   };
    // }, [])

    // a function that send to the service create-posts
        // import post service 
    // create a state with caption and image for the preview
    // after send - reload a alert - your post has been created
    // data from ref(inputs) and the author id from content or localStorage


    return(
    <React.Fragment>
       <button className="close-pop"
            onKeyPress={(event)=>{if (event.key==="Escape"){console.log('adsf'); props.clickBtnClose(isBtnClickedClose)}}}
            onClick={()=>props.clickBtnClose(isBtnClickedClose)}>
            X
        </button>
        <p className="title-create-post">Create new Post</p>
        <hr className="line-create-post" />
        <div className="flex-and-split">
                <div className="create-post-preview">
                    <div className="image-preview">
                        {currentCaption}
                        <img src={'#'} alt="" />
                    </div>
                </div>
            <form>
                <div className="post-caption">
                    <label className="createPost">Post Caption</label>
                    <input type="text" name="caption" onChange={(e)=>changeCaption(e.target.value)} />
                </div>
                <div className="post-image">
                    <label className="createPost">Post image</label>
                    <input type="text" name="image" accept="image/*" />
                </div>
                <button type="submit" id="addNewPost">post it!</button>
            </form>
        </div>
    </React.Fragment>
    )
}
 
 
 