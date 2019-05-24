import React from 'react';
import PostsService from '../services/posts.Service';
import UserService from '../services/users.service'; 

export const AppContext = React.createContext();
export const ContextConsumer = AppContext.Consumer;

const postsData = new PostsService();
const userData = new UserService();

export default class Context extends React.Component {
    state = {
<<<<<<< HEAD
        isLoggedIn: false,
        myLoggedInUser: null,
        allPosts: [],
        allUsers: [],
=======
        isLoggedIn: false || JSON.parse(localStorage.getItem('myData')),
        myLoggedInUser: null || JSON.parse(localStorage.getItem('userId')),
>>>>>>> 939ea47c9f65b00a2a76229c5b4314408aa7641c
        allPosts:[],
        loggedUserPosts:[]
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