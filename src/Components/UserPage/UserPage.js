import React, { useContext, useRef } from 'react';
import { AppContext } from '../../AppContext/AppContext';
import { BrowserRouter as Router, Route, NavLink, Switch, withRouter } from 'react-router-dom'
import UserInfo from './UserInfo';
import './userPage.scss';
import UserPagePosts from './UserPagePosts';
import Channel from './Channel';
import Saved from './Saved';
import Tagged from './Tagged';
import ListBox from '../listBox/ListBox';
import PostViewer from '../post-viewer/PostViewer';

function UserPage(props) {
	const context = useContext(AppContext);
	if (context.state.loggedUser) {
		return (
			<Router>
				<div className='userPage'>
					<UserInfo {...props} />
					<div className='nav'>
						<NavLink exact to={props.match.url} activeClassName='active'>
							<span className='text-container'>
								<div className='posts-sprite' />
								<span> Posts</span>
							</span>
						</NavLink>
						<NavLink to={`${props.match.url}/channel`} activeClassName='active'>
							<span className='text-container'>
								<div className='channel-sprite'/>
								<span> IGTV</span>
							</span>
						</NavLink>
						<NavLink to={`${props.match.url}/saved`} activeClassName='active'>
							<span className='text-container'>
								<div className='saved-sprite'/>
								<span> Saved</span>
							</span>
						</NavLink>
						<NavLink to={`${props.match.url}/tagged`} activeClassName='active'>
							<span className='text-container'>
								<div className='tagged-sprite'/>
								<span> Tagged</span>
							</span>
						</NavLink>
					</div>
					<div className='userPage-content'>
						<Switch>
							<Route exact path={'/:name/'} component={UserPagePosts} />
							<Route path={'/:name/channel'} component={Channel} />
							<Route path={'/:name/saved'} component={Saved} />
							<Route path={'/:name/tagged'} component={Tagged} />
							<Route path={'/:name/followers'} render={() => <ListBox listArray={context.state.loggedUser.followers} />} />
							<Route path={'/:name/following'} render={() => <ListBox listArray={context.state.loggedUser.following} />} />
							<Route path={'/p/:post'} component={PostViewer} />
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