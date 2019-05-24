import React from 'react';
import PostsService from '../services/posts.Service';

export const AppContext = React.createContext();
export const ContextConsumer = AppContext.Consumer;

const postsData = new PostsService();
const posts = postsData.fetchPosts;

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
            this.actions.getPosts(user._id);          
            },
        getPosts: (userId) => posts(userId).then(response => this.setState({ allPosts: response})),
        getUserPosts: (userId) => postsData.fetchLoggedUserPosts(userId).then(response => this.setState({loggedUserPosts: response})),

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