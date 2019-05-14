import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import UsersService from '../../../services/users.service';
import { ContextConsumer } from '../../../AppContext/AppContext';

const usersData = new UsersService();
   
 class Suggestions extends Component{
    constructor(props){
        super(props);
        this.state = {
            getSuggestions: null
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
           <div className="sugestions-friends-homepage">
                <div className="header-sidebar">
                        <p>Suggestions For You</p>
                        <p>See All</p>
                        </div>
                        {this.state.getSuggestions ? this.state.getSuggestions.map((userSug,i)=>{
                            return (
                                    <div className="sugestions-sidebar">   
                                        <div className="header-flex">
                                            <a className="user-image"><img src={userSug.userImg} alt='#' /></a>
                                        <div className="user-top-details">
                                            <div><Link to='/username'>{userSug.userName} </Link><p>Follows you</p></div>
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
                      
                </div>
    )
}
}
export default Suggestions;