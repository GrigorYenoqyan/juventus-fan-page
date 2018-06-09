import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => (
    <div className='header-container'>
        <div className='container-center'>
            <ul className='listUl'>
                <li className='listItems'>
                    <NavLink
                        className='listItemsLinks'
                        to='/home'
                        activeClassName='listItemsLinks-selected'
                    >
                        HOME
                    </NavLink>
                </li>
                <li className='listItems'>
                    <NavLink
                        className='listItemsLinks'
                        to='/news'
                        activeClassName='listItemsLinks-selected'                        
                    >
                        NEWS
                    </NavLink>
                </li>
                <li className='listItems'>
                    <NavLink
                        className='listItemsLinks'
                        to='/creators'
                        activeClassName='listItemsLinks-selected'
                    >
                        CREATORS
                    </NavLink>
                </li>
                <li className='listItems'>
                    <NavLink
                        className='listItemsLinks'
                        to='/team'
                        activeClassName='listItemsLinks-selected'
                    >
                        TEAM
                    </NavLink>
                </li>
                <li className='listItems'>
                    <NavLink
                        className='listItemsLinks'
                        to='/matches'
                        activeClassName='listItemsLinks-selected'
                    >
                        MATCHES
                    </NavLink>
                </li>
                <li className='listItems'>
                    <NavLink
                        className='listItemsLinks'
                        to='/history'
                        activeClassName='listItemsLinks-selected' 
                    >
                        HISTORY
                    </NavLink>
                </li>
                <li className='listItems'>
                    <NavLink
                        className='listItemsLinks'
                        to='/stadium'
                        activeClassName='listItemsLinks-selected'
                    >
                        STADIUM
                    </NavLink>
                </li>
            </ul>
        </div>
    </div>
)

export default Header;