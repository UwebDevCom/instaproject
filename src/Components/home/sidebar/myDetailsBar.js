import React from 'react';
import { ContextConsumer } from '../../../AppContext/AppContext';
import {Link } from 'react-router-dom';
export default function myDetailsBar(props) {
    return (
        <React.Fragment>
     <ContextConsumer>
     {
        (context)=>{
            return(
                context.state.myLoggedInUser ? ( <div className="me-profile">
                    <Link className="image-profile-sidebar" to={`/${context.state.myLoggedInUser._id}`}> <img src={context.state.myLoggedInUser.userImg} alt="#" /> </Link>
                   <div className="me-profile-content">
                   <Link to={`/${context.state.myLoggedInUser.userName}`}> {context.state.myLoggedInUser.userName} </Link>
                    <p>{context.state.myLoggedInUser.name + ' ' + context.state.myLoggedInUser.lastName}</p>
                   </div>
                </div>) :  console.log(context.state)
           
                )
        }
     }
                </ContextConsumer>
                </React.Fragment>
    )
}