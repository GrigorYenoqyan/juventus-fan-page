import React from 'react';
import PropTypes from "prop-types";
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

ArticlePage.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }).isRequired,
}


export default ArticlePage;