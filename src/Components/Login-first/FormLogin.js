import React, {Component} from 'react';
import { ContextConsumer } from '../../AppContext/AppContext';
import InputLogin from './InputLogin';
import LoginFailed from './loginFailed';
import UsersService from '../../services/users.service';
const usersData = new UsersService();
const theUser =  usersData.fetchUser;

class FormLogin extends Component{
    state = {
        fieldIsEmpty: true,
        inputValueEmail: 'test@gmail.com',
        inputValuePassword: '1234',
        labelGoesUp: '',
        loginFailed: null,
        myUser: null
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
    async checkValidation(fnVal,myUser,postss){
       
        let istheUser = await theUser(this.state.inputValueEmail,this.state.inputValuePassword);
        if (istheUser) {
            this.setState({loginFailed: false})
            fnVal();
            myUser(istheUser);
            postss('5caa1254f45978a9f8dd9ca7');

        }else{
            this.setState({loginFailed: true})

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
                            {(context)=>{
                                return(
                                    <div>
                                    <InputLogin
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