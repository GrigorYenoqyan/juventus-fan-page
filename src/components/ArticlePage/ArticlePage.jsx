import React from 'react';
import ColorContainer from '../ColorContainer';
import Subtitle from '../Subtitle';
import Description from '../Description';
import Title from '../Title'

const ArticlePage = ({ data }) => {
    return (
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
    )
}

export default ArticlePage;