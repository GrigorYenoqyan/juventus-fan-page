import React from "react";
import PropTypes from "prop-types";

import "./ContainerWhite.css";
import "../Container.css";

const ContainerWhite = ({ children }) => {
    return (
        <div className="container-white">
            <div className="container-center">
                {children}
            </div>
        </div>
    )
}

ContainerWhite.propTypes = {
    children: PropTypes.node.isRequired,
}

export default ContainerWhite;