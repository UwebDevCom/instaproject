import React, {Component} from 'react';
import Feed from './feed/Feed';
import Sidebar from './sidebar/Sidebar';
import './home.css';

class Home extends Component {
    render(){
        return(
            <React.Fragment>
               <div className="wrapper-home-page">
                   <div className="feeds-home-page">
                   <Feed key={this.props.uniqueKey} />
                   </div>
                   <div className="slider-homepage">
                   <Sidebar />
                   </div>
               </div>
            </React.Fragment>
        )
    }
}

export default Home;