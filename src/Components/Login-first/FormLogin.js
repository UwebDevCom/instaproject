import React, {Component} from 'react';
import { ContextConsumer } from '../../AppContext/AppContext';
import InputLogin from './InputLogin';
import LoginFailed from './loginFailed';


class FormLogin extends Component{
    state = {
        fieldIsEmpty: true,
        inputValueEmail: '',
        inputValuePassword: '',
        labelGoesUp: '',
        loginFailed: null
    }


    /// ****** separate the inputs to the different components //  - and set the state with compunentwillUpdate
    fieldsHandler=(email, password)=>{
            this.setState({
                inputValueEmail: email,
                inputValuePassword: password,
             });
             if (this.state.inputValueEmail.length >=1 || this.state.inputValuePassword.length >=1) {
                this.setState({ labelGoesUp: 'label-up',  fieldIsEmpty: false});
            } else{
                this.setState({ labelGoesUp: '',  fieldIsEmpty: true});
            }
    }
    checkValidation(fnVal,usersEmail){
        for (let userEmail of usersEmail)
        if (this.state.inputValueEmail !== userEmail.email || this.state.inputValuePassword !== userEmail.password) {
            this.setState({loginFailed: true})
        }else{
            fnVal();
        }
    }

    onClickForm = (e)=>{
        e.preventDefault();
    }
   render(){
    return (
        <div>
            <form id="loginForm" onClick={this.onClickForm}>
            <ContextConsumer>
                    {(context)=>(
                        <React.Fragment>
                            <InputLogin
                                validEmail = {context.state.allUsers.length > 0 ? context.state.allUsers[0].email: null}
                                type="text"
                                inputValue={this.state.inputValueEmail}
                                labelClass={this.state.labelGoesUp}
                                inputClass={"field user-email"}
                                label = "Phone number, username, or email"
                                change={(email)=>this.fieldsHandler(email,this.state.inputValuePassword)}
                                />
                            <InputLogin
                                type="password"
                                inputValue={this.state.inputValuePassword}
                                labelClass={this.state.labelGoesUp}
                                inputClass={"field user-pass"}
                                label = "Password"
                                change={(password)=>this.fieldsHandler(this.state.inputValueEmail,password)}
                            />
                            <button
                                onClick={()=>this.checkValidation(context.isLoggedIn,context.state.allUsers)}
                                className="login-btn"
                                type="submit"
                                disabled={this.state.fieldIsEmpty}>
                                Log In
                            </button>
                            {this.state.loginFailed ? <LoginFailed /> : ''}
                        </React.Fragment>
                    )}
              
                </ContextConsumer>
            </form>
        </div>
    )
   }
}
export default FormLogin;