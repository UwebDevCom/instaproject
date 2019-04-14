import React, { Component } from 'react';
import { ContextConsumer } from '../../AppContext/AppContext';
import './userInfo.css';

class UserInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {  }
	}
	render() {
		return (
			<ContextConsumer>
				{(context) => (
						<header className='header'>
							<div className='userInfo-image'>
								<img className='userInfo-img' alt='' src='https://instagram.ftlv6-1.fna.fbcdn.net/vp/1e6535686dfa80cb66eb929ecb6ffff7/5D386E88/t51.2885-19/s320x320/36721411_244452573016721_2328453739989434368_n.jpg?_nc_ht=instagram.ftlv6-1.fna.fbcdn.net'/>
							</div>
							<section className='userInfo-data'>
								<div className='userInfo-userName'>username</div>
								<div className='userInfo-stats'>
									<ul>
										<li>posts</li>
										<li>followers</li>
										<li>following</li>
									</ul>
								</div>
								<div className='userInfo-name'>name</div>
							</section>
						</header>
				)}
			</ContextConsumer>

		);
	}
}

export default UserInfo;
