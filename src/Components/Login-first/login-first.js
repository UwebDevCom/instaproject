import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';
import './login-first.css';
import apple from './images/app-app.png';
import android from './images/app-and.png';
import windows from './images/app-win.png';
import FormLogin from './FormLogin';
import Slider from './Slider';
import SignUp from '../sign-up/SignUp';
import LoginLink from '../login-link/LoginLink';
import Footer from '../footer/Footer';


export default function LoginFirst(props) {
    const context = useContext(AppContext);
    
    if(context.state.isLoggedIn && context.state.LoggedUser) {
        props.history.push('/') 
    } else {
        return(
            <div className="container-login">
                <div className="inner-container">
                    <div className="image-slides">
                        <Slider />    
                    </div>
                    <div className="login-area">
                        <div className="inner-login-area">
                        <div className="logo-login"></div>
                        <div className="login-form">
                            <FormLogin {...props} />
                            <div className="buffer">
                                <hr /><p>OR</p><hr />
                            </div>
                            <div className="fb-login">
                                <span className="icon-fb"></span><span>Login With Facebook</span>
                                <a href="https://link.link.co">Forgot password?</a>
                            </div>
                        </div>
                        </div>
                            <LoginLink message="don't have an account?" linkMessage=' Sign up' route='/signup' />
                        <div className="get-the-app">
                            <p>Get the app.</p>
                        <div className="get-apps">
                            <a href='https://link.link.co'><img alt='' src={apple} /></a>
                            <a href='https://link.link.co'><img alt='' src={android} /></a>
                        </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

