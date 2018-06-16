import React from "react";
import Slideshow from '../Slideshow'
import { stadiumData as stadium } from '../../data';
import Descriprion from '../Description';
import ColorContainer from '../ColorContainer';
import PageContainer from '../PageContainer';
import Title from '../Title';

const Stadium = () => {
    return (
        <PageContainer>
            <Slideshow images={stadium.images} />
            <ColorContainer color='white'>
                <Title color='black'>
                    Stadium
                </Title>
            </ColorContainer>
            <ColorContainer color='white'>
                <Descriprion color='black'>
                    {stadium.text}
                </Descriprion>
            </ColorContainer>
        </PageContainer>
    )
}

export default Stadium;