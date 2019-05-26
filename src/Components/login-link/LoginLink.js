import React from 'react';
import './loginLink.scss';
import { withRouter } from 'react-router-dom';

function LoginLink(props) {
    const message = props.message || 'Have an account?';
    const linkMessage = props.linkMessage || ' Login'
    const route = props.route || '/login'

    function handleClick() {
        props.history.push(route)
    }

    // console.log(props)

    return(
        <div className='loginLink-container'>
            <p>
                {message}
                <a href='#' onClick={handleClick}>{linkMessage}</a>
            </p>
        </div>
    )
}

export default withRouter(LoginLink);

