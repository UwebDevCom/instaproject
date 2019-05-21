import React ,{useState}  from 'react';
import AddPostButton from './AddPostButton';
import CreatePostForm from './CreatePostForm';
import CreatePostInside from './CreatePostInside';
import './create-post.css';



export default function createPost(){
    
    const [isClicked, changeIt] = useState(false);

    function isClickedFn(changeByClick){
        changeIt(changeByClick)
    }    
    
    return(
        <React.Fragment>
            {isClicked ? <CreatePostForm><CreatePostInside clickBtnClose={(changeByClick)=>isClickedFn(changeByClick)} /></CreatePostForm> : <AddPostButton clickBtn={(changeByClick)=>isClickedFn(changeByClick)} /> }
        </React.Fragment>
    )
}