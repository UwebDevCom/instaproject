import React from 'react';
import PostsService from '../services/posts.Service';

export const AppContext = React.createContext();
export const ContextConsumer = AppContext.Consumer;

const postsData = new PostsService();
const posts = postsData.fetchPosts;

export default class Context extends React.Component {
    state = {
        isLoggedIn: false,
        myLoggedInUser: null,
        allPosts:[],
        loggedUserPosts:[]
    }
     
    render() { 
        return (
            <AppContext.Provider value={{
                state: this.state,
                isLoggedIn: () => this.setState({isLoggedIn: !this.state.isLoggedIn}),
                myUser: (myUser) => this.setState({myLoggedInUser: myUser}),
                getPosts: (userId) => posts(userId).then(response => this.setState({ allPosts: response})),
                getUserPosts: (userId) => postsData.fetchLoggedUserPosts(userId)
                .then(response => this.setState({
                        loggedUserPosts: response
                    })
                )
            }} >
                {this.props.children}
            </AppContext.Provider>

        );
    }
}