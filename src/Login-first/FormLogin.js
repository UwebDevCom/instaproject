import React, {Component} from 'react';
class FormLogin extends Component{
    
    onClickForm = (e)=>{
        e.preventDefault();
    }
   render(){
    return (
        <div>
            <form id="loginForm" onClick={this.onClickForm}>
               <div className="field user-name">
                   <label>Phone number, username, or email</label>
               <input type="text" />
               </div>
               <div className="field user-pass">
               <label>Password</label>
                <input type="password" />
                </div>
                <button className="login-btn" type="submit">Log In</button>
            </form>
        </div>
    )
   }
}
export default FormLogin;