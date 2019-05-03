import React , {Component} from 'react';
import './Explore.css';
import { ContextConsumer } from '../../AppContext/AppContext';



class Explore extends Component{
    render(){
        return(
            <ContextConsumer>
                {(context) =>{
                    return ( 
                        <div className="explorContainer">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>

                            {/* <div>{context.state.allUsers.name}</div> */}
                        </div>
                    )
                }}
            </ContextConsumer>
        )
    }
}

export default Explore; 
