import React, {Component} from 'react';
import './login-first.css';
import apple from './images/app-app.png';
import android from './images/app-and.png';
import windows from './images/app-win.png';
import FormLogin from './FormLogin';
import Slider from './Slider';
import Footer from '../footer/footer';

class LoginFirst extends Component{
    render(){
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
                        <FormLogin />
                        <div className="buffer">
                            <hr /><p>OR</p><hr />
                        </div>
                        <div className="fb-login">
                            <span className="icon-fb"></span><span>Login With Facebook</span>
                            <a href="https://link.link.co">Forgot password?</a>
                        </div>
                    </div>
                   </div>
                   <div className="sign-up">
                        <span>Don't have an account?</span><a href="https://link.link.co">Sign Up</a>
                    </div>
                    <div className="get-the-app">
                        <p>Get the app.</p>
                    <div className="get-apps">
                        <a href='https://link.link.co'><img alt='' src={apple} /></a>
                        <a href='https://link.link.co'><img alt='' src={android} /></a>
                        <a href='https://link.link.co'><img alt='' src={windows} /></a>
                    </div>
                    </div>
                </div>
               </div>
               <Footer />
            </div>
        )
    }
}
export default LoginFirst;

