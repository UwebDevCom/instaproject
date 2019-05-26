import React, { useContext }from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AppContext } from '../../AppContext/AppContext'


export default function PrivateRoute({ component: Component, ...rest }) {
    const context = useContext(AppContext);
    return(
        <Route
            {...rest}
            render = {props => 
                context.state.isLoggedIn ? (
                    <Component {...props} />
                ) : (
                    <Redirect 
                        to={{
                            pathname: '/login',
                            state: {from: props.location}
                        }}
                    />
                )
            }
            
        />
    )
}
