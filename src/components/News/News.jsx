import React from 'react';
import ColorContainer from "../ColorContainer";
import Title from "../Title";
import "./News.css";
import PageContainer from '../PageContainer';
import { news } from "../../data.js";
import ArticleName from '../ArticleName';

import Description from "../Description";


const News = () => {
    return (
        <PageContainer>
            <ColorContainer color='white'>
                <Title color="black">News</Title>
            </ColorContainer>
            {
                news.map((article, i) => {
                    let cond = i % 2;
                    let color = cond ? "black" : "white";
                    let reverse = cond ? "news-content-wrapper-reverse" : "";
                    let content = (
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
                                    <Description  color={color}>{article.content}></Description>
                                </div>
                            </div>
                        </div>
                    );
                    return (
                        <div key={article.id}>
                            {
                                cond ? 
                                    <ColorContainer color='white'>
                                        {content}
                                    </ColorContainer> : 
                                    <ColorContainer color='black'>
                                        {content}
                                    </ColorContainer>
                            }
                            
                        </div>
                    )
                })
            }
        </PageContainer>
        
    )
}










// const News = () => {
   

// return (
//     <ColorContainer>
//         <ul className="newss">
//             {arrays.map((el) =>( <li  key={el.news} className='news'> <p className="newsParagraphs">{el.news} </p>  </li>))}
//         </ul>
//         </ColorContainer>
    
     
//    )
// }

export default News;