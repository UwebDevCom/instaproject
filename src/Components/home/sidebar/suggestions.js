import React, {Component} from 'react';
import NagiaLeze from '../../nagia/Nagia';
import {Link, BrowserRouter as Router} from 'react-router-dom';
import UsersService from '../../../services/users.service';
import { ContextConsumer } from '../../../AppContext/AppContext';


const usersData = new UsersService();
   
 class Suggestions extends Component{
    constructor(props){
        super(props);
        this.state = {
            getSuggestions: null,
            nagiaLeze: true

        }
    }
    async getSuggestions() {
        let users = await usersData.fetchSuggestionsUsers();
        this.setState({
            getSuggestions: await users
        });
    }
    componentDidMount(){
        this.getSuggestions()
    }
  
    render() {  
    return (
        <Router> 
           <div className="sugestions-friends-homepage">
                <div className="header-sidebar">
                        <p>Suggestions For You</p>
                        <Link to='#'>See All</Link>
                        </div>
                        {this.state.getSuggestions ? this.state.getSuggestions.map((userSug)=>{
                            return (
                                    <div className="sugestions-sidebar" key={userSug._id}>   
                                        <div className="header-flex">
                                            <Link to={`/${userSug.userName}`} className="user-image" ><img src={userSug.userImg} alt='#' /></Link>
                                        <div className="user-top-details">
                                            <div><Link to={`/${userSug.userName}`}>{userSug.userName} </Link><p>Follows you</p></div>
                                                <ContextConsumer>
                                                {
                                                    (context) => {
                                                        if (context.state.myLoggedInUser.following.includes(userSug._id) ) {
                                                            return (<button>Unfollow </button>)
                                                        }else{
                                                            return (<button>follow </button>)
                                                        }
                                                    }
                                                }
                                                </ContextConsumer>
                                        </div>
                                        </div>  
                                       </div>
                        )
                        })
                        : 'try Again..'}
                      
                </div></Router>
    )
}
}
export default Suggestions;