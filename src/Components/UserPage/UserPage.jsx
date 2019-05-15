import React, { Component } from 'react';
import { ContextConsumer } from '../../AppContext/AppContext';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import UserInfo from './UserInfo';
import './userPage.css';
import UserPagePosts from './UserPagePosts';
import Channel from './Channel';
import Saved from './Saved';
import Tagged from './Tagged';

export default class UserPage extends Component {
		render() { 
			return (
				<ContextConsumer>
					{(context) => {
						if (!context.state.myLoggedInUser) {
							console.log(context.state.myLoggedInUser)
							return <p>missing user data</p>
						} else { 
							return (
							<Router>
								<div className='userPageMain'>
									<UserInfo />
									<div className='userPage-linkDiv'>
										<Link className='userPage-link' to={`/${context.state.myLoggedInUser.userName}/`}>
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
											<Route exact path={`/${context.state.myLoggedInUser.userName}/`} component={UserPagePosts} />
											<Route  path={`/${context.state.myLoggedInUser.userName}/channel`} component={Channel} />
											<Route  path={`/${context.state.myLoggedInUser.userName}/saved`} component={Saved} />
											<Route  path={`/${context.state.myLoggedInUser.userName}/tagged`} component={Tagged} />
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