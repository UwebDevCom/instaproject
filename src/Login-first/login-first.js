import React, {Component} from 'react';
import './login-first.css';
import slide1 from './images/slide1.jpg';
import slide2 from './images/slide2.jpg';
import slide3 from './images/slide3.jpg';
import slide4 from './images/slide4.jpg';
import apple from './images/app-app.png';
import android from './images/app-and.png';
import windows from './images/app-win.png';
import FormLogin from './FormLogin';


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
                            <a href="#">Forgot password?</a>
                        </div>
                    </div>
                   </div>
                   <div className="sign-up">
                        <span>Don't have an account?</span><a href="#">Sign Up</a>
                    </div>
                    <div className="get-the-app">
                        <p>Get the app.</p>
                    <div className="get-apps">
                        <a href='#'><img src={apple} /></a>
                        <a href='#'><img src={android} /></a>
                        <a href='#'><img src={windows} /></a>
                    </div>
                    </div>
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

class Slider extends Component{  
    constructor(props){
        super(props);
        this.makeItMove();
    }
    state = {
       image: slide1,
       imageClass: 'fade',
    };

  
    makeItMove() {
        let i = 1;  
        let images = [slide1,slide2,slide3,slide4];
                setInterval(()=>{
                    if (i == images.length) {
                        i= 0;
                        }
                    this.setState({
                    image: images[i],
                    imageClass: this.state.imageClass ==='fade' ? 'img-fade' : 'fade'
                    });
                    i++;
                },2000);   
    };
    render(){
        const img = <img className={this.state.imageClass} src={this.state.image} alt="image" style={this.style} />;
        return (
            <React.Fragment>
              {img}
            </React.Fragment>
        )
    }
}

export default LoginFirst;

