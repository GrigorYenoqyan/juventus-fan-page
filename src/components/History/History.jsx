import React, { Component } from 'react';
import HashtagImage from '../HashtagImage'
import ContainerWhite from '../Containers/ContainerWhite';
import Subtitle from '../Titles/Subtitle';
import ArticleName from '../Titles/ArticleName';
import Description from '../Description';
import ContainerBlack from '../Containers/ContainerBlack';
import Title from '../Titles/Title';
import MainContainer from '../Containers/MainContainer';
import { historyData } from '../../data.js';
import './History.css';

class History extends Component {

    historyContent() {
        const result = historyData.map((el, index) => {
            return (
                index % 2 === 0 ?
                    <ContainerWhite key={el.articleName}>
                        {<div>
                            <Subtitle color={'black'}>
                                {el.date}
                            </Subtitle>

                            <ArticleName color={'black'}>
                                {el.articleName}
                            </ArticleName>

                            <Description  color='black'>{el.text}</Description>
                        </div>
                        }
                    </ContainerWhite>
                    :
                    <ContainerBlack key={el.articleName}>
                        {
                            <div>
                                <Subtitle color={'white'}>
                                    {el.date}
                                </Subtitle>

                                <ArticleName color={'white'}>
                                    {el.articleName}
                                </ArticleName>

                                <Description color='white'>{el.text}</Description>
                            </div>
                        }
                    </ContainerBlack>
            )
        })

        return result;
    }

    render() {
        return (
            <MainContainer>
                <HashtagImage />
                <ContainerWhite>
                    <Title color='black'>
                        History
                    </Title>
                </ContainerWhite>
                {this.historyContent()}
            </MainContainer>
        )
    }
}

export default History;