import React , {Component} from 'react';
import './Explore.css';
import { ContextConsumer } from '../../AppContext/AppContext';



class Explore extends Component{
    render(){
        return(
            <ContextConsumer>
                {(context) =>{
                    return <p>{context.state.allUsers.name}</p>
                }}
            </ContextConsumer>
        )
    }
}

export default Explore; 
