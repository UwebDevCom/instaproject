import React from 'react';
import PostsService from '../services/posts.Service';
import UserService from '../services/users.service'; 

export const AppContext = React.createContext();
export const ContextConsumer = AppContext.Consumer;

const postsData = new PostsService();
const userData = new UserService();

export default class Context extends React.Component {
    state = {
        isLoggedIn: false,
        myLoggedInUser: null,
        allPosts: [],
        allUsers: [],
        allPosts:[],
        loggedUserPosts:[]
    }
     
    render() { 
        return (
            <AppContext.Provider value={{
                state: this.state,
                isLoggedIn: () => this.setState({isLoggedIn: !this.state.isLoggedIn}),
                myUser: (myUser) => this.setState({myLoggedInUser: myUser}),
<<<<<<< HEAD
                getPosts: (userId)=> postsData.fetchPosts(userId)
                    .then(response => this.setState({ allPosts: response})),
                allUsers: () => userData.fetchSuggestionsUsers()
                    .then(response => {
                        console.log(response)
                        this.setState({ allUsers: response })}
                    ),
                getUserPosts: (userId) => postsData.fetchLoggedUserPosts(userId)
                .then(response => this.setState({
                        loggedUserPosts: response
                    })
                )
=======
                getPosts: (userId) => posts(userId).then(response => this.setState({ allPosts: response})),
                getUserPosts: (userId) => postsData.fetchLoggedUserPosts(userId).then(response => this.setState({loggedUserPosts: response})),
>>>>>>> d3da6f5f7380bcc790eadedb034b72395de5af12
            }} >
                {this.props.children}
            </AppContext.Provider>

        );
    }
}