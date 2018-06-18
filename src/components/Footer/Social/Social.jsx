import React from "react";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { socialIconsData as socialIcons } from "../../../data.js";

import "./Social.css";




const Social = () => {
    return (
        <ul className="social-container">
            {
                socialIcons.map((icon, i) => (
                        <li className="icon" key={i}>
                            <a href={icon.link} rel="noopener noreferrer" target="_blank">
                                <FontAwesomeIcon
                                    icon={icon.icon}
                                    className="font-icon"
                                />
                            </a>
                        </li>
                    )
                )
            }
        </ul>
    )
}



export default Social;