import React, { Component } from 'react';
import { ContextConsumer } from '../../AppContext/';
import './userInfo.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class UserInfo extends Component {
	constructor(props) {
		super(props)
		console.log('props', this.props)
	}
	render() {
		return (
			<ContextConsumer>
				{(context) => {
					if (!context.state.allUsers) {
				
						return <p>no userinfo to load</p>
					} else {
						
						 return ( 
						<Router>
							<header className='userInfo-header'>
								<div className='userInfo-image'>
									<img className='userInfo-img' alt='' src='https://instagram.ftlv6-1.fna.fbcdn.net/vp/1e6535686dfa80cb66eb929ecb6ffff7/5D386E88/t51.2885-19/s320x320/36721411_244452573016721_2328453739989434368_n.jpg?_nc_ht=instagram.ftlv6-1.fna.fbcdn.net'/>
								</div>
								<section className='userInfo-data'>
									<div className='userInfo-userName'>{context.state.allUsers[0].name}</div>
									<div className='userInfo-stats'>
										<ul>
											<li><span>{context.state.allPosts.length}</span> posts</li>
											<li>
												<Link to={`/${context.state.allUsers[0].userName}/followers`}>
												<span>{context.state.allUsers[0].followers.length}</span> followers</Link>
											</li>
											<li><span>{context.state.allUsers[0].following.length}</span> following</li>
										</ul>
									</div>
									<div className='userInfo-name'>{context.state.allUsers[0].userName}</div>
								</section>
							</header>
						</Router>
						)
					}
				}}
			</ContextConsumer>

		);
	}
}

export default UserInfo;
