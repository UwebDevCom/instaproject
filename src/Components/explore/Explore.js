import React, { useContext, useEffect }from 'react';
import './Explore.css';
import DiscoverUser from './DiscoverUser';
import { AppContext } from '../../AppContext/AppContext';


export default function Explore() {
    const context = useContext(AppContext);

    useEffect(()=> {
        context.allUsers();
    }, []);

    return ( 
        <div className="explorContainer">
            <div className="explorPage">
                <div className="dicoverConteiner">
                    <div className="dicoverHeader">discover people
                        <a className="seeAll" href="">see all</a> 
                        {/*   need href */}
                    </div>
                    <div className="dicoverAllUser">
                        {context.state.allUsers.map(user => <DiscoverUser props={user} />)}
                    </div>
                </div>
                <div className="exploreContianer">
                    <div className=""></div>
                </div>
                {/* <div>{context.state.allUsers.name}</div> */}
            </div>
        </div>
    )
}