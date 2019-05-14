import React, { Component } from 'react';
import PostsService from '../services/posts.Service';
import UserService from '../services/users.service'; 
const AppContext = React.createContext();
export const ContextConsumer = AppContext.Consumer;

const postsData = new PostsService();
const userData = new UserService();

class ContextProvider extends Component {
    state = {
        isLoggedIn: false,
        myLoggedInUser: null,
        allPosts: [],
        allUsers: [],
    }
     
    render() { 
        return (
            <AppContext.Provider value={{
                state: this.state,
                isLoggedIn: () => this.setState({isLoggedIn: !this.state.isLoggedIn}),
                myUser: (myUser) => this.setState({myLoggedInUser: myUser}),
                getPosts: (userId)=> postsData.fetchPosts(userId)
                    .then(response => this.setState({ allPosts: response})),
                allUsers: () => userData.fetchSuggestionsUsers()
                    .then(response => {
                        console.log(response)
                        this.setState({ allUsers: response })}
                    ),
            }} >
                {this.props.children}
            </AppContext.Provider>

        );
    }
}
 
export default ContextProvider;