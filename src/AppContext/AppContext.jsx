import React, { Component } from 'react';
import PostsService from '../services/posts.Service';
import UsersService from '../services/users.service';
const AppContext = React.createContext();
export const ContextConsumer = AppContext.Consumer;

const postsData = new PostsService();
const posts = postsData.fetchPosts();

const usersData = new UsersService();
const users = usersData.fetchUsers();

class ContextProvider extends Component {
    state = {
        isLoggedIn: false,
        allPosts:[],
        allUsers:[]
    }

    componentDidMount() {
        posts.then(response => this.setState({ allPosts: response}))
        users.then(response=> this.setState({ allUsers: response}))
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