import React, { useContext, useEffect }from 'react';
import './Explore.css';
import DiscoverUser from './DiscoverUser';
import { AppContext } from '../../AppContext/AppContext';
import { Route } from 'react-router-dom';
import UserPagePosts from '../UserPage/UserPagePosts';

class Explore extends Component {
    render(){
        return(
            <ContextConsumer>
                {(context) =>{
                    return ( 
                        <div className="explorContainer">
                        hello
                        </div>
                    )
                }}
            </ContextConsumer>
        )
    }
}

export default Explore; 
