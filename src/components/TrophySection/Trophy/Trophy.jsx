import React from "react";
import Title from "../../Titles/Title";
import ArticleName from "../../Titles/ArticleName";
import PropTypes from "prop-types";

import "./Trophy.css";

const Trophy = ({ data }) => {
    return (
        <div className="trophy">
            <Title color="black">{data.count}</Title>
            <div className="image-wrapper">
                <img src={data.logo} alt="" />
            </div>
            <ArticleName color="black">{data.name.toUpperCase()}</ArticleName>
        </div>
    )
}

Trophy.propTypes ={
    data: PropTypes.object.isRequired,
}

export default Trophy;