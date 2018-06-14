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
                <Title color='black'>
                    Stadium
                </Title>
            <ColorContainer color='white'>
                <Slideshow images={stadium.images} />
                <Descriprion color='black'>
                    {stadium.text}
                </Descriprion>
            </ColorContainer>
        </PageContainer>
    )
}

export default Stadium;