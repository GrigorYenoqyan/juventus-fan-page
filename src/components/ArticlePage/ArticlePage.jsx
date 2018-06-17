import React from 'react';
import ColorContainer from '../ColorContainer';
import Subtitle from '../Subtitle';
import Description from '../Description';
import Title from '../Title'

const ArticlePage = ({ title, subtitle, text }) => {
    console.log(title, subtitle, text)
    return (
        <ColorContainer color='white'>
            <Title color='black'>
                {title}
            </Title>
            <Subtitle color='black'>
                {subtitle}
            </Subtitle>
            <Description color='black'>
                {text}
            </Description>
        </ColorContainer>
    )
}

export default ArticlePage;