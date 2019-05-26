import React, { useContext } from 'react';
import { AppContext } from '../../AppContext/AppContext'
import Feed from './feed/Feed';
import Sidebar from './sidebar/Sidebar';
import './home.scss';

export default function Home() {
	const context = useContext(AppContext)
	if(!context.state.loggedUser) {
		return 'loading'
	} else {
	return(
		<React.Fragment>
			<div className='wrapper'>
				<div className="content">
					<div className="feed">
						<Feed />
					</div>
					<div className="slider">
						<Sidebar />
					</div>
				</div>
			</div>
			</React.Fragment>
	)}
}

