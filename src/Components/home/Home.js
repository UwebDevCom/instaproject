import React, {Component} from 'react';
import Feed from './feed/Feed';

class Home extends Component {
    render(){
        return(
            <React.Fragment>
                <h1>this is home</h1>
                <Feed />
            </React.Fragment>
        )
    }
}

export default Home;