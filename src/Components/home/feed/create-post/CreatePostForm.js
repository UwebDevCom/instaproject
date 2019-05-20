import React ,{useState, useEffect}  from 'react';
import {AppContext} from '../../../../AppContext/AppContext';
import styled from 'styled-components';
import './create-post.css';
//import imgIconDef from '../61393e2520c3.png';


export default function createPost(props){

    const [isPost , addPost] = useState(false);
    const [isBtnClicked, changeBtn] = useState(false);
    useEffect(()=>{
        props.clickBtn(isBtnClicked)
    });
    //const [img , addImg] = useState('');
    // hooks with context
    // and add an action for adding the new post to the user

    // ==== form 
    // form of adding data 
    // send the data by service
    // return data from server to context and state for updating 
    

    // button to open the lightbox form 

    // close the popup form 

    return(
    <React.Fragment>
        <div className="layoutDiv">
                <div className="pop-container">
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
                </div>
                <button onClick={()=>changeBtn(!isBtnClicked)}>X</button>
        </div>
    </React.Fragment>
    )
}