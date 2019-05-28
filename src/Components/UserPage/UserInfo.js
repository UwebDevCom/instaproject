import React, { useContext } from 'react';
import { AppContext } from '../../AppContext/';
import './userInfo.scss';
import { BrowserRouter as Router, Link, withRouter } from 'react-router-dom';

function UserInfo(props) {	
	const context = useContext(AppContext);	
	console.log('user info props: ', props)
	if (context.state.loggedUser) {
		return (
				<header className='userInfo-container'>
					<div className='user-image-div'>
						<img className='user-image' alt='' src={context.state.loggedUser.userImg}/>
					</div>
					<section className='user-data'>
						<div className='user-name'>{context.state.loggedUser.userName}</div>
						<div className='data-links'>
							<ul>
								<li><span>{context.state.loggedUserPosts.length}</span> posts</li>
								<li>
									<Link className='box-link' to={`${props.match.url}/followers`}>
										<span>
											{context.state.loggedUser.followers.length}
										</span> followers
									</Link>
								</li>
								<li>
									<Link className='box-link' to={`${props.match.url}/following`}>	
										<span>
											{context.state.loggedUser.following.length}
										</span> following
									</Link>
								</li>
							</ul>
						</div>
						<div className='name'>{context.state.loggedUser.name}</div>
					</section>
				</header>
		)
	} else { 
		return <p>no userinfo to load</p>
	}
}

export default UserInfo;