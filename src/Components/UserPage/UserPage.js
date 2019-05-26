import React, { useContext } from 'react';
import { AppContext } from '../../AppContext/AppContext';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from 'react-router-dom'
import UserInfo from './UserInfo';
import './userPage.scss';
import UserPagePosts from './UserPagePosts';
import Channel from './Channel';
import Saved from './Saved';
import Tagged from './Tagged';
import ListBox from '../listBox/ListBox';

function UserPage(props) {
	const context = useContext(AppContext);
	console.log('userPage match: ', props.match)
	if (context.state.loggedUser) {
		return (
			<Router>
				<div className='userPage'>
					<UserInfo {...props} />
					<div className='userPage-linkDiv'>
						<Link className='userPage-link' to={props.match.url}>
							<span className='userPage-link-span'>
								<div className='userPageLink-posts' />
								<span> Posts</span>
							</span>
						</Link>
						<Link className='userPage-link' to={`${props.match.url}/channel`}>
							<span className='userPage-link-span'>
								<div className='userPageLink-channel'>⍰</div>
								<span> IGTV</span>
							</span>
						</Link>
						<Link className='userPage-link' to={`${props.match.url}/saved`}>
							<span className='userPage-link-span'>
								<div className='userPageLink-saved'>⍰</div>
								<span> Saved</span>
							</span>
						</Link>
						<Link className='userPage-link' to={`${props.match.url}/tagged`}>
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
							<Route  path={`/:name/followers`} component={ListBox} />
						</Switch>
					</div>
				</div>
			</Router>
		)
	} else { 
		return <p>missing user data</p>
	}
}

export default withRouter(UserPage)