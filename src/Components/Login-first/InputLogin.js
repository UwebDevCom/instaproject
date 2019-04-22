import React , {Component} from 'react';



class InputLogin extends Component{

loginHandler(e){

}
    render(){

        return (
            <div className={this.props.inputClass}>
                   <label className={this.props.labelClass} >{this.props.label}</label>
               <input type={this.props.type}  value={this.props.inputValue} onChange={(e)=>this.props.change(e.target.value)} />
               </div>
        )   
    }
}
export default InputLogin;