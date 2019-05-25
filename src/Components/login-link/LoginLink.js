import React from 'react';
import './loginLink.scss';

export default function LoginLink(props) {
    const message = props.message || 'Have an account?';
    const linkMessage = props.linkMessage || ' Login'
    const route = props.route || '/login'

    function handleClick() {
        this.props.history.push({route})
    }

    return(
        <div className='loginLink-container'>
            <p>
                {message}
                <a href='#' onClick={handleClick}>{linkMessage}</a>
            </p>
        </div>
    )
}

