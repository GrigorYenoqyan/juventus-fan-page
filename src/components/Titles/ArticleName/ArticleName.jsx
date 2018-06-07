import React from "react";
import PropTypes from "prop-types";

import "./ArticleName.css";

const ArticleName = ({ children, color }) => {
    return (
        <h4 className={`${color}-article-name`}>{children}</h4>
    )
}

ArticleName.propTypes = {
    color: PropTypes.oneOf(["white", "black"]).isRequired,
    children: PropTypes.node.isRequired,
}

export default ArticleName;