import React from 'react';
import PostsService from '../services/posts.Service';
import UserSerive from '../services/users.service';

export const AppContext = React.createContext();
export const ContextConsumer = AppContext.Consumer;

const PostService = new PostsService();
const UserService = new UserSerive();

export default class Context extends React.Component {
    state = {
        isLoggedIn: false,  //|| JSON.parse(localStorage.getItem('myData')),
        loggedUser: null, //|| JSON.parse(localStorage.getItem('userId')),
        allPosts:[],
        loggedUserPosts:[]
    }

    actions = {
        logUser: (user) => {
            this.setState({
                isLoggedIn: !this.state.isLoggedIn,
                loggedUser: user
            })
        },
        getPosts: (userId) => PostService.fetchPosts(userId).then(response => this.setState({ allPosts: response})),
        getUserPosts: (userId) => PostService.fetchLoggedUserPosts(userId).then(response => this.setState({loggedUserPosts: response})),
        registerUser: (userData) => UserService.registerUser(userData).then(response => this.actions.logUser(response))
    }
     
    render() { 
        return (
            <AppContext.Provider value={{
                state: this.state,
                actions: this.actions
            }} >
                {this.props.children}
            </AppContext.Provider>

        );
    }
}