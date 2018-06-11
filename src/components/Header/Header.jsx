import React, { Component } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    // teamPopup(e) {
    //     e.stopPropagation();
    //     e.target.lastChild.style = 'display: inline;'
    // }

    // teamPopupHide(e) {
    //     e.stopPropagation();
    //     e.currentTarget.style = 'display: none;'
    // }

    render() {
        return (
            <div className='header-container'>
                <div className='container-center'>
                    <ul className='listUl'>
                        <li className=''>
                            <NavLink
                                className='logo-link'
                                to='/home'
                            >
                                <img src="./images/logo-j1.png" alt="" className="header-logo" />
                            </NavLink>
                        </li>
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
                        <li className='listItems team-link'>
                            <NavLink
                                className='listItemsLinks'
                                to=""
                            >
                                TEAM
                            </NavLink>
                            <ul className='team-ul'>
                                <li className='team-popup-li'>
                                    <NavLink
                                        className=''
                                        to='/players'
                                    >
                                        Players
                                        </NavLink>
                                </li>
                                <li className='listItems team-popup-li'>
                                    <NavLink
                                        className=''
                                        to='/fans'
                                    >
                                        Fans
                                        </NavLink>
                                </li>
                            </ul>
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
    }
}

export default Header;