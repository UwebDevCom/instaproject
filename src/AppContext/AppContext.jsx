import React, { Component } from 'react';

const AppContext = React.createContext();
export const ContextConsumer = AppContext.Consumer;

class ContextProvider extends Component {
    state = {
        isLoggedIn: false
    }

    render() { 
        return (
            <AppContext.Provider value={{
                state: this.state,
                isLoggedIn: () => this.setState({isLoggedIn: !this.state.isLoggedIn})
            }} >
                {this.props.children}
            </AppContext.Provider>

        );
    }
}
 
export default ContextProvider;