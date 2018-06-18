import React, { Component } from 'react';
import HashtagImage from '../HashtagImage'
import HistoryContentBlock from './HistoryContentBlock';
import PageContainer from '../PageContainer';
import { historyData, hashtagImageData } from '../../data.js';
import './History.css';

class History extends Component {

    historyContentRow() {
        const result = [];
        for (let i = 0; i < historyData.length; i += 2) {

            result.push(
                <div className='content-row' key={historyData[i].date}>
                    <HistoryContentBlock el={historyData[i]} />
                    <HistoryContentBlock el={historyData[i + 1]} />
                </div>
            )

        }
        return result;
    }

    render() {
        return (
            <PageContainer>
                <HashtagImage data={hashtagImageData.history}/>
                {this.historyContentRow()}
            </PageContainer>
        )
    }
}

export default History;