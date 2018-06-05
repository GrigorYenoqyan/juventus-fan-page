import React from "react";
import PropTypes from "prop-types";

import "./Title.css";

const Title = ({ children, color }) => {
    return (
        <h1 className={`${color}-page-title`}>{children}</h1>
    )
}

Title.propTypes = {
    color: PropTypes.oneOf(["white", "black"]).isRequired,
    children: PropTypes.node.isRequired,
}

export default Title;