import React , {useState} from 'react';
import { ContextConsumer } from '../../../AppContext/AppContext';
import {Link } from 'react-router-dom';
export default function storiesBar(props) {
    return (
        <React.Fragment>
     <ContextConsumer>
     {
        (context)=>{
            return(
            <div className="me-profile">
                    <Link className="image-profile-sidebar" to={`/${context.state.allUsers[0]._id}`}> <img src={context.state.allUsers[0].userImg} alt="#" /> </Link>
                   <div className="me-profile-content">
                   <Link to={`/${props.userId}`}> user name here </Link>
                    <p>full name</p>
                   </div>
                </div>
                )
        }
     }
                </ContextConsumer>
                </React.Fragment>
    )
}