import React , {useState } from 'react';

export default function loginFailed(){

    const [isValid] = useState(false);
    const style = {
    'textAlign': 'center',
    'color': 'red',
    'fontSize': '0.8rem',
    'padding': '1em 1em 0em 1em',
    'margin': '0'
    }
    if (!isValid) {
        return (
            <p style = {style}>
            Invalid email or password
            </p>
        )
    }
}