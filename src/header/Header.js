import React, { Component } from 'react';
import './Header.css';
import Search from  './Search';
import Logo from "./Logo"


class Header extends Component {
  render(){
    return(
      <div class="header">
        <Search />
        <Logo />
          {/* <ExploreButton className="exploreButton"/>
          <Notification className="notification"/>
          <UserButton className="userButton"/>
          <Loader className="loader"/> */}
      </div>
    )
  }
}



export default Header;