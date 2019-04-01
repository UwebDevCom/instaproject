import React, { Component } from 'react';
import './Header.css';


class Search extends Component {

  render(){
    return(
      <form >
        <input class="search flexHeader" type='text' placeholder="search"/>
      </form>
    )
  }
}

export default Search;