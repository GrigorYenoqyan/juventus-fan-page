import React, { Component } from 'react';
import HashtagImage from '../HashtagImage'
import HistoryContentBlock from './HistoryContentBlock';
import PageContainer from '../PageContainer';
import { historyData } from '../../data.js';
import './History.css';

class History extends Component {

    historyContentRow() {
        return historyData.map((el) => {
            return (
                <div className='content-row' key={el[0].date}>
                    <HistoryContentBlock el={el[0]} />
                    <HistoryContentBlock el={el[1]} />
                </div>
            )
        }
        )
    }

    render() {
        return (
            <PageContainer>
                <HashtagImage />
                {this.historyContentRow()}
            </PageContainer>
        )
    }
}

export default History;