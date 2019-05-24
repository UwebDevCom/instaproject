import React, { useState, useContext }from 'react';
import './signUp.scss';
import { AppContext } from '../../AppContext'

export default function SignUp() {
    const context = useContext(AppContext);

    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [activeLable, setLable] = useState('');

    async function handleSubmit(e) {
        console.log('user submit in action')
        e.preventDefault();
        if (email && fullName && userName && password) {
            await context.actions.registerUser({
                'email': email,
                'fullName': fullName,
                'userName': userName,
                'password': password
            })
        } else {
            alert('please fill all fields')
        }
    }

    return (
        <div className='signUp'>
            <div className='logo'></div>
            <form onSubmit={handleSubmit}>
                <h2>Sign up to see photos and videos from your friends.</h2>
                <div className='btn-container'>
                    <button><span className='fb-icon'></span>Login With Facebook</button>
                </div>
                <div className='or-div'>
                    <div className='or-line'></div>
                    <div className='or-text'>OR</div>
                    <div className='or-line'></div>
                </div>


                <div className='input-box'>
                    <label for='email' className={'signUp-lable' + activeLable}>Email</label>
                    <input name='email' type='text' className='signUp-input' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='input-box'>
                    <label for='fullName' className={'signUp-lable' + activeLable}>Full Name</label>
                    <input name='fullName' type='text' className='signUp-input' value={fullName} onChange={(e) => setFullName(e.target.value)}/>
                </div>
                <div className='input-box'>
                    <label for='userName' className={'signUp-lable' + activeLable}>User Name</label>
                    <input name='userName' type='text' className='signUp-input' value={userName} onChange={(e) => setUserName(e.target.value)}/>
                </div>
                <div className='input-box'>
                    <label for='password' className={'signUp-lable' + activeLable}>Password</label>
                    <input name='password' type='password' className='signUp-input' onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className='btn-container'>
                    <button type='submit' >Sign up</button>
                </div> 
            </form>
        </div>
    )
}
