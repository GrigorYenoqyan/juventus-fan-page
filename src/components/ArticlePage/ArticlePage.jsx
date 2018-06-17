import React from 'react';
import ColorContainer from '../ColorContainer';
import Subtitle from '../Subtitle';
import Description from '../Description';
import Title from '../Title'
import PageContainer from '../PageContainer';

const ArticlePage = ({ data }) => {
    return (
        <PageContainer>
            <ColorContainer color='white'>
                <Title color='black'>
                    {data.title}
                </Title>
                <Subtitle color='black'>
                    {data.subtitle}
                </Subtitle>
                <Description color='black'>
                    {data.text}
                </Description>
            </ColorContainer>
        </PageContainer>
    )
}

export default ArticlePage;