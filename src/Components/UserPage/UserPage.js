import React, { useContext } from 'react';
import { AppContext } from '../../AppContext/AppContext';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import UserInfo from './UserInfo';
import './userPage.scss';
import UserPagePosts from './UserPagePosts';
import Channel from './Channel';
import Saved from './Saved';
import Tagged from './Tagged';
import ListBox from '../listBox/ListBox';

export default function UserPage(props) {
	const context = useContext(AppContext);
	
	if (context.state.loggedUser) {
		return (
			<Router>
				<div className='userPage'>
					<UserInfo />
					<div className='userPage-linkDiv'>
						<Link className='userPage-link' to={props.match}>
						{console.log(props.match)}
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
							<Route exact path={`/u/`} component={UserPagePosts} />
							<Route  path={`/channel`} component={Channel} />
							<Route  path={`/saved`} component={Saved} />
							<Route  path={`/tagged`} component={Tagged} />
							<Route  path={`/followers`} component={ListBox} />
						</Switch>
					</div>
				</div>
			</Router>
		)
	} else { 
		return <p>missing user data</p>
	}
			
			

}