import React from 'react';
import PropTypes from "prop-types";

import ArticleName from '../../ArticleName';
import Description from "../../Description";

const NewsContent = ({ article, index}) => {
    let cond = index % 2;
    let color = cond ? "black" : "white";
    let reverse = cond ? "news-content-wrapper-reverse" : "";
    return (
        <div>
            <div>
                <ArticleName color={color}>{article.title}</ArticleName>
            </div>
            <div className={`news-content-wrapper ${reverse}`}>
                <div className="img-wrapper">
                    <img
                        src={article.image}
                        alt=""
                        className="article-image"
                    />
                </div>
                <div className="desc-wrapper">
                    <Description color={color}>{article.content}</Description>
                </div>
            </div>
        </div>
    );
}

NewsContent.propTypes = {
    article: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
    index: PropTypes.number.isRequired,
}


export default NewsContent;