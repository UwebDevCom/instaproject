import React, { Component } from 'react';

const AppContext = React.createContext();
export const ContextConsumer = AppContext.Consumer;

class ContextProvider extends Component {
    state = { 
        name: "boaz"
    }

    render() { 
        return (
            <AppContext.Provider value={{
                state: this.state,
                isLoggedIn: () => false 
            }} >
                {this.props.children}
            </AppContext.Provider>

        );
    }
}
 
export default ContextProvider;