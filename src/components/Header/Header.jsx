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
                                isActive={window.scrollTo(0, 0)}
                            >
                                <img src="./images/logo-j1.png" alt="" className="header-logo" />
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
                        <li className='listItems team-link'>
                            <NavLink
                                className='listItemsLinks team'
                                to="#"
                            >
                                TEAM
                            </NavLink>
                            <ul className='team-ul'>
                                <li className='team-popup-li'>
                                    <NavLink
                                        className=''
                                        to='/players'
                                        isActive={window.scrollTo(0, 0)}
                                    >
                                        Players
                                        </NavLink>
                                </li>
                                <li className='listItems team-popup-li'>
                                    <NavLink
                                        className=''
                                        to='/fans'
                                        isActive={window.scrollTo(0, 0)}
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
                                isActive={window.scrollTo(0, 0)}
                            >
                                MATCHES
                    </NavLink>
                        </li>
                        <li className='listItems'>
                            <NavLink
                                className='listItemsLinks'
                                to='/history'
                                activeClassName='listItemsLinks-selected'
                                isActive={window.scrollTo(0, 0)}
                            >
                                HISTORY
                    </NavLink>
                        </li>
                        <li className='listItems'>
                            <NavLink
                                className='listItemsLinks'
                                to='/stadium'
                                activeClassName='listItemsLinks-selected'
                                isActive={window.scrollTo(0, 0)}
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