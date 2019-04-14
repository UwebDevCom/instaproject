import React, { Component } from 'react';
import './Header.css';
import Search from  './Search';
import Logo from "./Logo";
import ExploreButton from './ExploreButton';
import Notification from './Notification';
import UserButton from './UserButton';
import UserPage from '../UserPage/UserPage';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

class Header extends Component {
  render(){
    return <h1>Explorer!</h1>
  }
}

export default Header;