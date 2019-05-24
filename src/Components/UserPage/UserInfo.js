import React, { useContext } from 'react';
import { AppContext } from '../../AppContext/';
import './userInfo.scss';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default function UserInfo() {	
	const context = useContext(AppContext);	
	
	if (context.state.loggedUser) {
		return (
			<Router>
				<header className='userInfo-header'>
					<div className='userInfo-image'>
						<img className='userInfo-img' alt='' src={context.state.loggedUser.userImg}/>
					</div>
					<section className='userInfo-data'>
						<div className='userInfo-userName'>{context.state.loggedUser.name}</div>
						<div className='userInfo-stats'>
							<ul>
								<li><span>{context.state.allPosts.length}</span> posts</li>
								<li>
									<Link to={`/${context.state.loggedUser.userName}/followers`}>
									<span>{context.state.loggedUser.followers.length}</span> followers</Link>
								</li>
								<li><span>{context.state.loggedUser.following.length}</span> following</li>
							</ul>
						</div>
						<div className='userInfo-name'>{context.state.loggedUser.userName}</div>
					</section>
				</header>
			</Router>
		)
	} else { 
		return <p>no userinfo to load</p>
	}
}