import React, { Component } from 'react';
import { ContextConsumer } from '../../AppContext/AppContext';
import InputLogin from './InputLogin';
import LoginFailed from './loginFailed';
import UsersService from '../../services/users.service';
const UserService = new UsersService();

class FormLogin extends Component{
    
    state = {
        email: 'gal123@gmail.com',
        password: 'gal123',
        fieldIsEmpty: true,
        labelGoesUp: '',
        loginFailed: null,
        myUser: null
    }

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

    async checkValidation(fnVal,myUser,postss){
       
        let istheUser = await UserService.userAuth(this.state.inputValueEmail,this.state.inputValuePassword);
        if(istheUser) {
            this.setState({loginFailed: false})
            fnVal();
            myUser(istheUser);
            postss(istheUser._id);
        } else {
            this.setState({loginFailed: true})
            }
    }

    onClickForm = (e)=>{
        e.preventDefault();
    }
    
   render(){
    return (
        <div>
            <form id="loginForm" onSubmit={this.onClickForm}>
                <ContextConsumer>
                    {(context)=>{
                        return(
                            <div>
                            <InputLogin
                        type="email"
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
                        onClick={()=>this.checkValidation(context.isLoggedIn,context.myUser, context.getPosts)}
                        className="login-btn"
                        type="submit"
                        disabled={this.state.fieldIsEmpty}>
                        Log In
                    </button>
                    {this.state.loginFailed ? <LoginFailed /> : ''}
                            </div>
                        )
                    }}
                    </ContextConsumer>
            </form>
        </div>
    )
   }
}
export default FormLogin;