import React, {Component} from 'react';
import { ContextConsumer } from '../../AppContext/AppContext';
import InputLogin from './InputLogin';



class FormLogin extends Component{
    state = {
        fieldIsEmpty: true,
        inputValueEmail: '',
        inputValuePassword: '',
        labelGoesUp: ''
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
    
componentDidUpdate(){
    console.log(this.state.inputValueEmail,this.state.inputValuePassword );
}

    onClickForm = (e)=>{
        e.preventDefault();
    }
   render(){
    return (
        <div>
            <form id="loginForm" onClick={this.onClickForm}>
              <InputLogin type="text" inputValue={this.state.inputValueEmail} labelClass={this.state.labelGoesUp} inputClass={"field user-email"} label = "Phone number, username, or email" change={(email)=>this.fieldsHandler(email,this.state.inputValuePassword)} />
              <InputLogin type="password" inputValue={this.state.inputValuePassword} labelClass={this.state.labelGoesUp} inputClass={"field user-pass"} label = "Password" change={(password)=>this.fieldsHandler(this.state.inputValueEmail,password)} />
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