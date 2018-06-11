import React from "react";
// import ContainerBlack from "../../Containers/ContainerBlack";
// import Title from "../../Titles/Title"


import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { socialIcons } from "../../../data.js";

import "./Social.css";




const Social = () => {
    return (
        <ul className="social-container">
            {
                socialIcons.map((icon, i) => (
                        <li className="icon" key={i}>
                            <a href={icon.link} target="_blank">
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