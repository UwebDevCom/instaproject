import React, { Component } from 'react';
import { ContextConsumer } from '../../AppContext/AppContext';
import UesrInfo from './UserInfo';
import './userPage.css';

class UserPage extends Component {
		constructor(props) {
				super(props);
				this.state = {  }
		}
		render() { 
				return (
						<ContextConsumer>
								{(context) => (
										<div className='userPageMain'>
												<UesrInfo />
										</div>
								)}
						</ContextConsumer>
				);
		}
}



export default UserPage ;