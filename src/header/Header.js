import React, { Component } from 'react';
import './Header.css';
import Search from  './Search';
import Logo from "./Logo";
import ExploreButton from './ExploreButton';
import Notification from './Notification';
import UserButton from './UserButton';

class Header extends Component {
  render(){
    return(
      <div class="header">
        <Search />
        <Logo />
        <ExploreButton />
        <Notification />
        <UserButton />
          {/* <Loader /> */}
      </div>
    )
  }
}



export default Header;