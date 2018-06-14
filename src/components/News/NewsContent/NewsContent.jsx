import React from 'react';

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

export default NewsContent;