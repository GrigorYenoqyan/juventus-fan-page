import React from "react";
import PropTypes from "prop-types";

import "./Description.css";

const Description = ({ children, color }) => {
    return (
        <p className={`${color}-description`}>{children}</p>
    )
}

Description.propTypes = {
    color: PropTypes.oneOf(["white", "black"]).isRequired,
    children: PropTypes.node.isRequired,
}

export default Description;