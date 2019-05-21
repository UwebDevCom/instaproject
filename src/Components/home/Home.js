import React, {Component} from 'react';
import Feed from './feed/Feed';
import Sidebar from './sidebar/Sidebar';
import Nav from '../Nav/Nav';
import './home.css';

class Home extends Component {
    render(){
        return(
            <React.Fragment>
              <Nav />
               <div className="wrapper-home-page">
                   <div className="feeds-home-page">
                     <Feed />
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