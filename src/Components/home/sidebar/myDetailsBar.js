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
                context.state.loggedUser ? ( <div className="me-profile">
                    <Link className="image-profile-sidebar" to={`/${context.state.loggedUser._id}`}> <img src={context.state.loggedUser.userImg} alt="#" /> </Link>
                   <div className="me-profile-content">
                   <Link to={`/${context.state.loggedUser.userName}`}> {context.state.loggedUser.userName} </Link>
                    <p>{context.state.loggedUser.name + ' ' + context.state.loggedUser.lastName}</p>
                   </div>
                </div>) :  console.log(context.state)
           
                )
        }
     }
                </ContextConsumer>
                </React.Fragment>
    )
}