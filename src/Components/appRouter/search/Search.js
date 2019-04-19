import React, {Component} from 'react';
import './search.css';

const Search  = () => {

    const [search, setSearch] = useSetat(search);
    let search = "search";

    
        return(
            <div className="appRouterSearchBox">
                <input type="text" placeholder={search}></input>
            </div>   
        )
    }
 

 export default Search;