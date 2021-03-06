import React from 'react';
import ColorContainer from "../ColorContainer";
import Title from "../Title";
import "./News.css";
import { newsData as news } from "../../data.js";
import PageContainer from '../PageContainer';

import NewsContent from "./NewsContent";


const News = () => (
    <PageContainer>
        <ColorContainer color='white'>
            <Title color="black">News</Title>
        </ColorContainer>
        {
            news.map((article, i) => {
                const content = <NewsContent article={article} index={i} />;
                return (
                    <div key={`block-row-${i}`}>
                        {
                            i % 2 ?
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

export default News;