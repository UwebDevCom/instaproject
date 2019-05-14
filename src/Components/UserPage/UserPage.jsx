import React, { Component } from 'react';
import { ContextConsumer } from '../../AppContext/AppContext';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import UserInfo from './UserInfo';
import './userPage.css';
import UserPagePosts from './UserPagePosts';
import Channel from './Channel';
import Saved from './Saved';
import Tagged from './Tagged';
import ListBox from '../listBox/ListBox';
import Explore from '../explore/Explore';

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
										<Link className='userPage-link' to={`/${context.state.allUsers[0].userName}/`}>
											<span className='userPage-link-span'>
												<div className='userPageLink-posts' />
												<span> Posts</span>
											</span>
										</Link>
										<Link className='userPage-link' to='channel'>
											<span className='userPage-link-span'>
												<div className='userPageLink-channel'>⍰</div>
												<span> IGTV</span>
											</span>
										</Link>
										<Link className='userPage-link' to='saved'>
											<span className='userPage-link-span'>
												<div className='userPageLink-saved'>⍰</div>
												<span> Saved</span>
											</span>
										</Link>
										<Link className='userPage-link' to='tagged'>
											<span className='userPage-link-span'>
												<div className='userPageLink-tagged'>⍰</div>
												<span> Tagged</span>
											</span>
										</Link>
									</div>
									<div className='userPage-content'>
										<Switch>
											<Route exact path={`/${context.state.allUsers[0].userName}/`} component={UserPagePosts} />
											<Route  path={`/${context.state.allUsers[0].userName}/channel`} component={Channel} />
											<Route  path={`/${context.state.allUsers[0].userName}/saved`} component={Saved} />
											<Route  path={`/${context.state.allUsers[0].userName}/tagged`} component={Tagged} />
										</Switch>
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