import React from "react";
import PropTypes from "prop-types";

import "./Container.css";

const ContainerBlack = ({ children }) => {
    return (
        <div className="container-black">
            <div className="container-center">
                {children}
            </div>
        </div>
    )
}

ContainerBlack.propTypes = {
    children: PropTypes.node.isRequired,
}

export default ContainerBlack;