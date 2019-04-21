import React, { useState, useEffect } from 'react';
import './search.css';

const Search = () =>{
    const [search, setSearch] = useState("search");

        return(
            <div className="appRouterSearchBox">
                <input type="text" placeholder={search}></input>
                <span className="appRouterMagnifyingGlass"></span>
            </div>   
        )
    }

 

 export default Search;