import React ,{useState ,useContext}  from 'react';
import './create-post.css';
import PostsService from '../../../../services/posts.Service';
import { AppContext } from '../../../../AppContext/AppContext';

export default function createPost(props){

    
    const context = useContext(AppContext);
    const CreatePost = new PostsService();
    const author = context.state.myLoggedInUser._id;

    const [isBtnClickedClose, changeBtnClose] = useState(false);
    const [currentCaption, changeCaption] = useState("");
    const [image, setImage] = useState("");

    
    const handlePostSubmit = (e, postData)=>{
        e.preventDefault();
        if (postData.caption.length < 2 && postData.image.length < 2) {
            alert('cant post an empty post');
        }
        props.clickBtnClose(isBtnClickedClose)
        CreatePost.createPost(postData);
        
    }

    
    // useEffect(()=>{
    //     props.clickBtnClose(!isBtnClickedClose)
    // },[])
    // a function that send to the service create-posts
        // import post service 
    // create a state with caption and image for the preview
    // after send - reload a alert - your post has been created
    // data from ref(inputs) and the author id from content or localStorage


    return(
    <React.Fragment>
       <button className="close-pop"
            onKeyPress={(event)=>{if (event.key==="Escape"){props.clickBtnClose(isBtnClickedClose)}}}
            onClick={()=>props.clickBtnClose(isBtnClickedClose)}>
        </button>
        <p className="title-create-post">Create new Post</p>
        <hr className="line-create-post" />
        <div className="flex-and-split">
                <div className="create-post-preview">
                    { (image.length < 4 || currentCaption.length < 4) ? <div className="image-preview">
                        <img src={'#'} alt="" />
                        <p>Preview</p>    
                    </div> : <div className="preview-wrapper">
                        <img src={image} alt="45" />
                        <div className="features">
              <div className="buttons">
              <button><span className = 'like-btn unliked'></span></button> 
              <button><span className="comment-btn"></span></button> 
              <button><span className="share-btn"></span></button> 
              </div>
              <div className="save-it">
              <button><span className="save-btn"></span></button> 
              </div>
           </div>
                    <p class="preview-caption">{currentCaption}</p>
                    </div> }
                    
                </div>
            <form onSubmit= {(e)=>handlePostSubmit(e,{caption : currentCaption, image: image, author: author })}>
                <div className="post-caption">
                    <label className="createPost">Post Caption</label>
                    <input type="text" name="caption" onChange={(e)=>changeCaption(e.target.value)} />
                </div>
                <div className="post-image">
                    <label className="createPost">Post image</label>
                    <input type="text" name="image" accept="image/*" onChange={e => setImage(e.target.value)} />
                </div>
                <button type="submit" id="addNewPost" >post it!</button>
            </form>
        </div>
    </React.Fragment>
    )
}
 
 
 