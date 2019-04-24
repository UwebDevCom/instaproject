import React, { useState, useEffect } from 'react';
import './search.css';

export default function Search() {
    
    const [search, setSearch] = useState('tomerrr');

    // const handleChange = (e) => {
    //     e.preventDefault();
    //     setSearch(e.target.value)
    // }

    return(
        <div className="appRouterSearchBox">
            <div>
                <span className="appRouterMagnifyingGlass"></span>
                <span>
                    <input 
                    type="text" 
                    placeholder="search"
                    onChange = {(e) => setSearch(e.target.value)}
                    />
                </span>
                <p>{search}</p>
            </div>
        </div>   
    )
}

 

