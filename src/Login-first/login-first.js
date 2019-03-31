import React, {Component} from 'react';
import './login-first.css';
import slide1 from './images/slide1.jpg';
class LoginFirst extends Component{
    render(){
        return(
            <div className="container-login">
               <div className="inner-container">
               <div className="image-slides">
                   <Slider />
                </div>
                <div className="login-area">
                    <div className="logo"></div>
                    <div className="login-form">
                        <FormLogin />
                    </div>
                    <div className="get-the-app"></div>
                </div>
               </div>
                <footer>
                <ul>
                        <li><a href={'/'}>About us</a></li>
                        <li><a href={'/'}>Support</a></li>
                        <li><a href={'/'}>Press</a></li>
                        <li><a href={'/'}>API</a></li>
                        <li><a href={'/'}>Jobs</a></li>
                        <li><a href={'/'}>privacy</a></li>
                        <li><a href={'/'}>Tearms</a></li>
                        <li><a href={'/'}>Directory</a></li>
                        <li><a href={'/'}>Profiles</a></li>
                        <li><a href={'/'}>Hashtags</a></li>
                        <li><a href={'/'}>Language</a></li>
                      
                    </ul>
                    <span>© 2019 INSTAGRAM</span>
                </footer>
            </div>
        )
    }
}

const Slider = (props)=>{


    return  <img src={slide1} alt='image' />
}


const FormLogin = ()=>{
    const onClickForm = (e)=>{
        e.preventDefault();
        
    }
    return (
        <div>
            <form id="loginForm" onSubmit={onClickForm}>
               <div className="field user-name">
                   <label></label>
               <input type="text" value="test@gmail.com" />
               </div>
               <div className="field user-pass">
               <label></label>
                <input type="password" value="test@gmail.com" />
                </div>
                <button className="login-btn" type="submit">Log In</button>
            </form>
        </div>
    )
}


export default LoginFirst;

