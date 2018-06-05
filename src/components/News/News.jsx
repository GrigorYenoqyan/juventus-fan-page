import React from 'react';
import ContainerWhite from "../Container/ContainerWhite";
import ContainerBlack from "../Container/ContainerBlack";
import Title from "../Text/Title";
import "./News.css";
import { news } from "../../data.js";
import ArticleName from '../Text/ArticleName';
import Description from '../Text/Description';


const News = () => {
    return (
        <div>
            <ContainerWhite>
                <Title color="black">News</Title>
            </ContainerWhite>
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
                                    <Description color={color}>{article.content}</Description>
                                </div>
                            </div>
                        </div>
                    );
                    return (
                        <div key={article.id}>
                            {
                                cond ? 
                                    <ContainerWhite>
                                        {content}
                                    </ContainerWhite> : 
                                    <ContainerBlack>
                                        {content}
                                    </ContainerBlack>
                            }
                            
                        </div>
                    )
                })
            }
        </div>
        
    )
}










// const News = () => {
   

// return (
//     <ContainerBlack>
//         <ul className="newss">
//             {arrays.map((el) =>( <li  key={el.news} className='news'> <p className="newsParagraphs">{el.news} </p>  </li>))}
//         </ul>
//         </ContainerBlack>
    
     
//    )
// }

export default News;