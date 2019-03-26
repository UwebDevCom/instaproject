import React, { Component } from 'react';
import './Header.css';
import Search from  './Search';


class Header extends Component {
  render(){
    return(
      <div className="header">
      <Search className="search"/>
        {/* <Logo className="logo"/>
        <ExploreButton className="exploreButton"/>
        <Notification className="notification"/>
        <UserButton className="userButton"/>
        <Loader className="loader"/> */}
      </div>
    )
  }
}



export default Header;