import React ,{useState}  from 'react';
import './create-post.css';



export default function createPost(props){

    const [isPost , addPost] = useState(false);
    const [isBtnClickedClose, changeBtnClose] = useState(false);
 
   
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
                                    <img src={'#'} alt="" />
                                </div>
                            </div>
                        <form>
                            <div className="post-caption">
                                <label className="createPost">Post Caption</label>
                                <input type="text" name="caption" />
                            </div>
                            <div className="post-image">
                                <label className="createPost">Post image</label>
                                <input type="file" name="image" accept="image/*" />
                            </div>
                            <button type="submit" id="addNewPost">post it!</button>
                        </form>
                    </div>
    </React.Fragment>
    )
}
 
 
 