import React, {Component} from 'react';
import { ContextConsumer } from '../AppContext/AppContext';




class FormLogin extends Component{
    state = {
        fieldIsEmpty: true,
        inputUsername: '',
        inputPassword: '',
        labelGoesUp: ''
    }
    fieldsHandler=(e)=>{
        console.log(this.state.inputUsername)
        if (this.state.inputUsername.length >=2 || this.state.inputPassword.length >= 2) {
            this.setState({
                fieldIsEmpty: false,
                labelGoesUp: 'label-up'
            });
        } else if (this.state.inputUsername.length <2 || this.state.inputUsername.length <2){
            this.setState({
                fieldIsEmpty: true,
                labelGoesUp: ''
            });
        }
        this.setState({
            inputUsername: e.target.value,
            // inputPassword:e.target.value
          });
    }
    onClickForm = (e)=>{
        e.preventDefault();
    }
   render(){
    return (
        <div>
            <form id="loginForm" onClick={this.onClickForm}>
               <div className="field user-name">
                   <label className={this.state.labelGoesUp} >Phone number, username, or email</label>
               <input type="text" value={this.state.inputUsername} onChange={(e)=>this.fieldsHandler(e)} />
               </div>
               <div className="field user-pass">
               <label>Password</label>
                <input type="password" value={this.state.inputPassword} onChange={(e)=>this.fieldsHandler(e)} />
                </div>
                <ContextConsumer>
                    {(context)=>(
                        <React.Fragment>
                            <button
                                onClick={context.isLoggedIn}
                                className="login-btn"
                                type="submit"
                                disabled={this.state.fieldIsEmpty}>
                                Log In
                            </button>
                        </React.Fragment>
                    )}
              
                </ContextConsumer>
            </form>
        </div>
    )
   }
}
export default FormLogin;