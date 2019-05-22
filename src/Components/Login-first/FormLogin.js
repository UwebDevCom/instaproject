import React, { useState, useContext } from 'react';
import { AppContext } from '../../AppContext/AppContext';
import LoginFailed from './loginFailed';
import UsersService from '../../services/users.service';
const UserService = new UsersService();

function FormLogin() {
    const context = useContext(AppContext);
    const [email, setEmail] = useState('gal123@gmail.com')
    const [password, setPassword] = useState('gal123')
    const [isFieldEmpty, setField] = useState(false);
    const [labelGoesUp, setLable] = useState('false');
    const [loginFailed, setLogin] = useState(null);

    //run handleSubmit on form submit - 
    //<form id="loginForm" onSubmit={handleSubmit}>
    async function handleSubmit(e) {
        e.preventDefault();
        const validUser = await UserService.userAuth(email, password) 
        //validUser returns user object and
        if (validUser) {
            return context.actions.logUser(validUser);
        } else {
            setLogin(true)
        }
    }

    function handleChange(e) {
        if (email.length >=1 || password.length >=1) {
            setLable('label-up')
            setField(true);
        } else{
            setLable('');
            setField(true);
        }
    }

    // async function authUser(fnVal,myUser,postss) {
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

    return (
        <div>
            <form id="loginForm" onSubmit={handleSubmit}>
                <div>
                    <div className="field user-email">
                        <label className={labelGoesUp + " label-form"} >"Phone number, username, or email"</label>
                        <input type="text" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="field user-email">
                        <label className={labelGoesUp + " label-form"} >"Password"</label>
                        <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button
                        className="login-btn"
                        type="submit"
                        disabled={isFieldEmpty}>
                        Log In
                    </button>
                    {loginFailed ? <LoginFailed /> : ''}
                </div>
            </form>
        </div>
    )
   
}
export default FormLogin;