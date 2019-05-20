import React ,{useState, useEffect}  from 'react';
import AddPostButton from './AddPostButton';
import CreatePostForm from './CreatePostForm';
import './create-post.css';



export default function createPost(props){
    
    const [isClicked, changeIt] = useState(false);
   
    // useEffect(()=>{
    //     isClickedFn()
    // },[])

    function isClickedFn(changeByClick){
        changeIt(changeByClick)
    }    
    
    return(
        <React.Fragment>
            {isClicked ? <CreatePostForm /> : <AddPostButton clickBtn={(changeByClick)=>isClickedFn(changeByClick)} /> }
        </React.Fragment>
    )
}