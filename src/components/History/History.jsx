import React, { Component } from 'react';
import HashtagImage from '../HashtagImage'
import Subtitle from '../Subtitle';
import ArticleName from '../ArticleName';
import Description from '../Description';
import ColorContainer from '../ColorContainer';
import Title from '../Title';
import PageContainer from '../PageContainer';

import { historyData, hashtagImageData } from '../../data.js';
import './History.css';

class History extends Component {

    historyContent() {
        const result = historyData.map((el, index) => {
            const even = index % 2 === 0;
            return (
                <ColorContainer color={even ? 'white' : 'black'} key={el.articleName}>
                    {<div>
                        <Subtitle color={even ? 'black' : 'white'}>
                            {el.date}
                        </Subtitle>

                        <ArticleName color={even ? 'black' : 'white'}>
                            {el.articleName}
                        </ArticleName>

                        <Description color={even ? 'black' : 'white'}>{el.text}</Description>
                    </div>
                    }
                </ColorContainer>
            )
        })

        return result;
    }

    render() {
        return (
            <PageContainer>
                <HashtagImage data={hashtagImageData.fansHistory} />
                <ColorContainer color='white'>
                    <Title color='black'>
                        HISTORY
                    </Title>
                </ColorContainer>
                {this.historyContent()}
            </PageContainer>
        )
    }
}

export default History;