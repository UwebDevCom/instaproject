import React ,{useState}  from 'react';
import AddPostButton from './AddPostButton';
import PopupForm from '../../../popup-form/PopupForm';
import CreatePostContent from './CreatePostContent';
import './create-post.css';



export default function createPost(props){
    
    const [isClicked, changeIt] = useState(false);

    function isClickedFn(changeByClick){
        changeIt(changeByClick)
    }    
    
    return(
        <React.Fragment>
            {isClicked ? 
            <PopupForm activate={isClicked}>
                <CreatePostContent
                    clickBtnClose={(changeByClick)=>isClickedFn(changeByClick)} />
                    </PopupForm> :
                        <AddPostButton clickBtn={(changeByClick)=>isClickedFn(changeByClick)} /> }
        </React.Fragment>
    )
}