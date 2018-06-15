import React, { Component } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

import logo from "../../assets/images/logo-j1.png";

class Header extends Component {

    render() {
        return (
            <div className='header-container'>
                <div className='container-center'>
                    <ul className='listUl'>
                        <li className=''>
                            <NavLink
                                className='logo-link'
                                to='/home'
                                isActive={window.scrollTo(0, 0)}
                            >
                                <img src={logo} alt="" className="header-logo" />
                            </NavLink>
                        </li>
                        <li className='listItems'>
                            <NavLink
                                className='listItemsLinks'
                                to='/home'
                                activeClassName='listItemsLinks-selected'
                                isActive={window.scrollTo(0, 0)}
                            >
                                HOME
                            </NavLink>
                        </li>
                        <li className='listItems'>
                            <NavLink
                                className='listItemsLinks'
                                to='/news'
                                activeClassName='listItemsLinks-selected'
                                isActive={window.scrollTo(0, 0)}
                            >
                                NEWS
                            </NavLink>
                        </li>
                        <li className='listItems'>
                            <NavLink
                                className='listItemsLinks'
                                to='/creators'
                                activeClassName='listItemsLinks-selected'
                                isActive={window.scrollTo(0, 0)}
                            >
                                CREATORS
                            </NavLink>
                        </li>
                        <li className='listItems'>
                            <NavLink
                                className='listItemsLinks'
                                to='/club'
                                activeClassName='listItemsLinks-selected'
                                isActive={window.scrollTo(0, 0)}
                            >
                                CLUB
                    </NavLink>
                        </li>
                        <li className='listItems'>
                            <NavLink
                                className='listItemsLinks'
                                to='/matches'
                                activeClassName='listItemsLinks-selected'
                                isActive={window.scrollTo(0, 0)}
                            >
                                MATCHES
                    </NavLink>
                        </li>
                        <li className='listItems'>
                            <NavLink
                                className='listItemsLinks'
                                to='#'
                                activeClassName='listItemsLinks-selected'
                                isActive={window.scrollTo(0, 0)}
                            >
                                PLAYERS
                    </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Header;