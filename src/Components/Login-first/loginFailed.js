import React , {useState, useEffect } from 'react';

export default function loginFailed(props){

    const [isValid, setValidate] = useState(false);
    const style = {
    'text-align': 'center',
    'color': 'red',
    'font-size': '0.8rem',
    'padding': '1em 1em 0em 1em',
    'margin': '0'
    }
    if (!isValid) {
        return (
            <p style = {style}>
            Sorry, your password was incorrect. Please double-check your password.
            </p>
        )
    }
}