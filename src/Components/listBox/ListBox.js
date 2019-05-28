import React, { useContext } from 'react';
import './listBox.scss';
import { Link } from 'react-router-dom';
import UserPage from '../UserPage/UserPage';

export default function ListBox({ listArray }) {
    console.log(listArray);
    return (
        <div className='listBox-container'>
            <div className='list-container'>
                <ul className='list'>
                    {listArray.map(user => {
                        return (
                            <li className='listItem'>
                                <div className='user-container'>
                                    <div className='user-info'>
                                        <div className='user-image'>
                                            <img/>
                                        </div>
                                        <div className='user-name'>
                                            <div>
                                                <Link to=''>{user.name || 'tomer matmon'}</Link>
                                            </div>
                                            <div>{user.userName || 'tomermatmon'}</div>
                                        </div>
                                    </div>
                                    <button></button>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}