import React from "react";
import PropTypes from "prop-types";
import "./Trophy.css";
import ArticleName from "../../Titles/ArticleName";
import Title from "../../Titles/Title";


const Trophy = ({ data }) => {
    return (
        <div className="trophy">
            <Title color="black">{data.count}</Title>
            <div className="image-wrapper">
                <img src={data.logo} alt="" />
            </div>
            <ArticleName color="black">{data.name}</ArticleName>
        </div>
    )
}

Trophy.propTypes ={
    data: PropTypes.object.isRequired,
}

export default Trophy;