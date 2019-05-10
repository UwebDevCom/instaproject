import React, { Component } from 'react';
import PostsService from '../services/posts.Service';
const AppContext = React.createContext();
export const ContextConsumer = AppContext.Consumer;

const postsData = new PostsService();
const posts = postsData.fetchPosts;

class ContextProvider extends Component {
    state = {
        isLoggedIn: false,
        myLoggedInUser: null,
        allPosts:[],
    }
     
    render() { 
        return (
            <AppContext.Provider value={{
                state: this.state,
                isLoggedIn: () => this.setState({isLoggedIn: !this.state.isLoggedIn}),
                myUser: (myUser) => this.setState({myLoggedInUser: myUser}),
                getPosts: (userId)=> posts(userId).then(response => this.setState({ allPosts: response}))
            }} >
                {this.props.children}
            </AppContext.Provider>

        );
    }
}
 
export default ContextProvider;