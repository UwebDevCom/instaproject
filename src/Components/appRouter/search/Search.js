import React, { useState, useEffect } from 'react';
import './search.css';

export default function Search() {
    
    const [search, setSearch] = useState('tomerrr');

    // const handleChange = (e) => {
    //     e.preventDefault();
    //     setSearch(e.target.value)
    // }

<<<<<<< HEAD
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
                        onChange = {event => setSearch(event.target.value)}
                        />
                    </span>
                </div>
            </div>   
        )
    }
=======
    return(
        <div className="appRouterSearchBox">
            <div>
                <span className="appRouterMagnifyingGlass"></span>
                <span>
                    <input 
                    type="text" 
                    placeholder="search"
                    onChange = {(event) => setSearch(event.target.value)}
                    />
                </span>
            </div>
        </div>   
    )
}
>>>>>>> 3e87c2ac1d8d8fbad2e361fd6e263cc3ea86f251

 

