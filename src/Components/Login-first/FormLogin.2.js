import React, {Component} from 'react';
import { ContextConsumer } from '../../AppContext/AppContext';
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

    async handleSubmit(e, callback) {
        e.preventDefault();
        const validUser = await UserService.userAuth(this.state.email, this.state.password)
        console.log(context)
        context(validUser);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
        //     if (state.email.length >=1 || state.password.length >=1) {
        //     setState({ labelGoesUp: 'label-up',  isFieldEmpty: false});
        // } else{
        //     setState({ labelGoesUp: '',  isFieldEmpty: true});
        // }
    }

    // async authUser(fnVal,myUser,postss) {
    //     let user = await UserService.userAuth(state.email, state.password);
    //     if(user) {
    //         setState({loginFailed: false})
    //         fnVal();
    //         myUser(user);
    //         postss(user._id);
    //     } else {
    //         setState({loginFailed: true})
    //         }
    // }
    
    render(){
        return (
            <ContextConsumer>
                {(context)=>{
                    return(
                        <div>
                            <form id="loginForm" onSubmit={(e) => this.handleSubmit(e, context.actions.logUser)}>
                                <div>
                                    <div className="field user-email">
                                        <label className={this.state.labelGoesUp + " label-form"} >"Phone number, username, or email"</label>
                                        <input type="text" name='email' value={this.state.email} onChange={(e) => this.handleChange(e)} />
                                    </div>
                                    <div className="field user-email">
                                        <label className={this.state.labelGoesUp + " label-form"} >"Password"</label>
                                        <input type="password" name='password' value={this.state.password} onChange={(e) => this.handleChange(e)} />
                                    </div>
                                    <button
                                        className="login-btn"
                                        type="submit"
                                        disabled={this.state.isFieldEmpty}>
                                        Log In
                                    </button>
                                    {this.state.loginFailed ? <LoginFailed /> : ''}
                                </div>
                            </form>
                        </div>
                    )
                }}
            </ContextConsumer>
        )
   }
}
export default FormLogin;