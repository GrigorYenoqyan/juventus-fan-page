import React from 'react';
import HashtagImage from '../HashtagImage'
import Title from '../Title';
import ColorContainer from '../ColorContainer';
import Description from '../Description';
import PageContainer from '../PageContainer';
import Slideshow from '../Slideshow';
import './Fans.css';
import { fansData, hashtagImageData } from '../../data.js';

const Fans = () => {
    return (
        <PageContainer>
            <HashtagImage data={hashtagImageData.fans}/>
            <ColorContainer color='white'>
                <Title color='black'>
                    Fans
                </Title>
            </ColorContainer>
            <ColorContainer color='white'>
                <Slideshow images={fansData.images} />
            </ColorContainer>
            <ColorContainer color='white'>
                <Description color='black' >
                    {fansData.text}
                </Description>
            </ColorContainer>
        </PageContainer>
    )
}

export default Fans;