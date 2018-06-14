import React from "react";
import PropTypes from "prop-types";

import "./Subtitle.css";

const Subtitle = ({ children, color }) => {
    return (
        <h3 className={`${color}-subtitle`}>{children}</h3>
    )
}

Subtitle.propTypes = {
    color: PropTypes.oneOf(["white", "black"]).isRequired,
    children: PropTypes.node.isRequired,
}

export default Subtitle;