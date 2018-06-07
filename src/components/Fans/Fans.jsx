import React from 'react';
import HashtagImage from '../HashtagImage'
import { fansData } from '../../data.js';
import './Fans.css';
import ContainerWhite from '../Containers/ContainerWhite';
import Title from '../Titles/Title';
import ContainerBlack from '../Containers/ContainerBlack';
import Description from '../Description';

const Fans = () => {
    return (
        <div>
            <HashtagImage />

            <ContainerWhite>
                <Title color='black'>
                    Fans
                </Title>
            </ContainerWhite>

            <ContainerWhite>
                <img src={fansData.image} alt='fansImage' className='fans-image' />
            </ContainerWhite>

            <ContainerBlack>
                <Description color='white' >
                    {fansData.text}
                </Description>
            </ContainerBlack>
        </div>
    )
}

export default Fans;