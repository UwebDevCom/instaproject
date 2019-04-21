import React, { Component } from 'react';
import { ContextConsumer } from '../../AppContext/AppContext';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import UserInfo from './UserInfo';
import './userPage.css';
import UserPagePosts from './UserPagePosts';
import Channel from './Channel';
import Saved from './Saved';
import Tagged from './Tagged';

class UserPage extends Component {
		constructor(props) {
			super(props);
			this.state = {  }
		}
		render() { 
			return (
				<ContextConsumer>
					{(context) => {
						if (!context.state.allUsers) {
							return <p>missing user data</p>
						} else { 
							return (
							<Router>
								<div className='userPageMain'>
									<UserInfo />
									<div className='userPage-linkDiv'>
										<Link className='userPage-link' to='username'><span><div>⍰</div><span> Posts</span></span></Link>
										<Link className='userPage-link' to='channel'><span><div>⍰</div><span> IGTV</span></span></Link>
										<Link className='userPage-link' to='saved'><span><div>⍰</div><span> Saved</span></span></Link>
										<Link className='userPage-link' to='tagged'><span><div>⍰</div><span> Tagged</span></span></Link>
									</div>
									<div className='userPage-content'>
											<Route exact path='/username' component={UserPagePosts} />
											<Route exact path='/channel' component={Channel} />
											<Route exact path='/saved' component={Saved} />
											<Route excat path='/tagged' component={Tagged} />
									</div>
								</div>
							</Router>)
						}
					}}
				</ContextConsumer>
			);
		}
}



export default UserPage ;