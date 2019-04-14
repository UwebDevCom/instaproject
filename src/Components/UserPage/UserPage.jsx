import React, { Component } from 'react';
import { ContextConsumer } from '../../AppContext/AppContext';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import UserInfo from './UserInfo';
import './userPage.css';
import UserPagePosts from './UserPagePosts';
import Channel from './Channel';

class UserPage extends Component {
		constructor(props) {
			super(props);
			this.state = {  }
		}
		render() { 
			return (
				<ContextConsumer>
					{(context) => (
						<Router>
							<div className='userPageMain'>
								<UserInfo />
								<div className='userPage-linkDiv'>
									<Link className='userPage-link' to='username'>POSTS</Link>
									<Link className='userPage-link' to='channel'>IGTV</Link>
									<Link className='userPage-link' to='saved'>SAVED</Link>
									<Link className='userPage-link' to='tagged'>TAGGED</Link>
								</div>
								<div className='userPage'>
									<Route exact path='/username' component={UserPagePosts} />
									<Route exact path='/channel' component={Channel} />
									{/* <Saved />
									<Tagged /> */}
								</div>
							</div>
						</Router>
					)}
				</ContextConsumer>
			);
		}
}



export default UserPage ;