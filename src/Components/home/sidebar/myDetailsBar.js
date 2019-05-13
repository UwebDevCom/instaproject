import React , {useState} from 'react';
import { ContextConsumer } from '../../../AppContext/AppContext';
import {Link } from 'react-router-dom';
export default function myDetailsBar(props) {
    return (
        <React.Fragment>
     <ContextConsumer>
     {
        (context)=>{
            return(
                context.state.myUser ? ( <div className="me-profile">
                    <Link className="image-profile-sidebar" to={`/${context.state.myUser._id}`}> <img src={context.state.myUser.userImg} alt="#" /> </Link>
                   <div className="me-profile-content">
                   <Link to={`/${props.userId}`}> {context.state.myUser.userName} </Link>
                    <p>{context.state.myUser.name + ' ' + context.state.myUser.lastName}</p>
                   </div>
                </div>) : ''
           
                )
        }
     }
                </ContextConsumer>
                </React.Fragment>
    )
}