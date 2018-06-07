import React from 'react';
import './Header.css';

const Header = (props) => (
    <div className="header-container">
        <div className="container-center">
            <ul className="listUl">
                <li className="listItems"><a className="listItemsLinks" href="">HOME</a> </li>
                <li className="listItems"><a className="listItemsLinks" href="">NEWS</a></li>
                <li className="listItems"><a className="listItemsLinks" href="">CREATORS</a></li>
                <li className="listItems"><a className="listItemsLinks" href="">TEAM</a></li>
                <li className="listItems"><a className="listItemsLinks" href="">MATCHES</a></li>
                <li className="listItems"><a className="listItemsLinks" href="">HISTORY</a></li>
                <li className="listItems"><a className="listItemsLinks" href="">STADIUM</a></li>
            </ul>
        </div>
    </div>
)

export default Header;