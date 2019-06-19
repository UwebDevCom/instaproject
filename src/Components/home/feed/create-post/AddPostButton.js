import React, {useState, useEffect} from 'react';


export default function addPostButton(props){

    const [isBtnClicked, changeBtn] = useState(false);
        useEffect(()=>{
            props.clickBtn(isBtnClicked)
        });
  
    return (
        <React.Fragment>
            <button onClick={()=>changeBtn(!isBtnClicked)} className="create-post-button"></button>
        </React.Fragment>
    )

}
