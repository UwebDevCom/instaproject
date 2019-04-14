import React, { Component } from 'react';
import PostsService from '../posts/posts.Service';
const AppContext = React.createContext();
export const ContextConsumer = AppContext.Consumer;

const postsData = new PostsService();
const posts = postsData.fetchPosts();

class ContextProvider extends Component {
    state = {
        isLoggedIn: false,
        allPosts:[]
    }

    componentDidMount() {
        posts.then(response => this.setState({ allPosts: response}))
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