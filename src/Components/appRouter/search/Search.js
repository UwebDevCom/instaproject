import React, { useState, useEffect } from 'react';
import './search.css';

const Search = () =>{
    const [search, setSearch] = useState('');


    // const setSearch = (ref) => ref;


        return(
            <div className="appRouterSearchBox">
                <div>
                    <span className="appRouterMagnifyingGlass"></span>
                    <span>{search}
                        <input 
                        type="text" 
                        placeholder="search"
                        // ref={() => search = "search"}
                        // onChange = {input => setSearch(input)}
                        />
                    </span>
                </div>
            </div>   
        )
    }

 

 export default Search;