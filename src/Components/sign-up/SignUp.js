import React, { useState, useContext }from 'react';
import './signUp.scss';
import LoginLink from '../login-link/LoginLink';
import GetTheApp from '../get-the-app/GetTheApp';
import { AppContext } from '../../AppContext';
import Footer from '../footer/Footer';

export default function SignUp(props) {
    const context = useContext(AppContext);

    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [activeLable, setLable] = useState('');

    async function handleSubmit(e) {
        console.log('user submit in action')
        e.preventDefault();
        try {
            if (email && fullName && userName && password) {
                await context.actions.registerUser({
                    'email': email,
                    'fullName': fullName,
                    'userName': userName,
                    'password': password
                })
                .then(result => {
                    context.actions.logUser(result);
                    props.history.push('/')
                })
            } else {
                alert('please fill all fields')
            }
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <div className='signup-page'>
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
                    <p>By signing up, you agree to our <a href='#'>Terms</a> , <a href='#'>Data Policy</a> and <a href='#'>Cookies Policy</a> .</p>
                </form>
            </div>
            <LoginLink />
            <GetTheApp />
            <Footer />
            
        </div>
    )
}
