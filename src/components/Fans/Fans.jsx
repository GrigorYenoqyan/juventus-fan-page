import React from 'react';
import HashtagImage from '../HashtagImage'
import Title from '../Title';
import ColorContainer from '../ColorContainer';
import Description from '../Description';
import PageContainer from '../PageContainer';
import './Fans.css';
import { fansData, hashtagImageData } from '../../data.js';

const Fans = () => {
    return (
        <PageContainer>
            <HashtagImage data={hashtagImageData.fansHistory} />

            <ColorContainer color='white'>
                <Title color='black'>
                    THE FANS
                </Title>
            </ColorContainer>

            <ColorContainer color='white'>
                <img src={fansData.image} alt='fansImage' className='fans-image' />
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