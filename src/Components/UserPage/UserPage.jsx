import React, { useContext } from 'react';
import { AppContext } from '../../AppContext/AppContext';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import UserInfo from './UserInfo';
import './userPage.css';
import UserPagePosts from './UserPagePosts';
import Channel from './Channel';
import Saved from './Saved';
import Tagged from './Tagged';

export default function UserPage() {
	const context = useContext(AppContext);
	
	if (context.state.myLoggedInUser) {
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
							<Route exact path={`/:name/`} component={UserPagePosts} />
							<Route  path={`/:name/channel`} component={Channel} />
							<Route  path={`/:name/saved`} component={Saved} />
							<Route  path={`/:name/tagged`} component={Tagged} />
						</Switch>
					</div>
				</div>
			</Router>
		)
	} else { 
		return <p>missing user data</p>
	}
			
			

}