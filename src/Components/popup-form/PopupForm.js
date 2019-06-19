import React , {useState, useEffect} from 'react';
// import './create-post.css';

export default function PopupForm(props){
    const [isActive, setActive] = useState(props.activate);
    if (isActive) { return(
        <React.Fragment>
            <div className="layoutDiv">
                    <div className="pop-container">
                    <button className="close-pop"
                        onKeyPress={(event)=>event.key==="Escape" ? setActive(!isActive): ''}
                        onClick={()=>{setActive(!isActive); props.closePop()}}>
                        X
                    </button>
                        {props.children}
                    </div>
            </div>
        </React.Fragment>
        ) }else return '';
}