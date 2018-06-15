import React from 'react';
import './Club.css';
import { clubData, hashtagImageData } from '../../data';
import { Link } from 'react-router-dom';
import PageContainer from '../PageContainer';
import ColorContainer from '../ColorContainer';
import HashtagImage from '../HashtagImage';
import Subtitle from '../Subtitle';


const Club = () => {
    return (
        <PageContainer>
            <HashtagImage data={hashtagImageData.club} />

            <ColorContainer color='white'>
                <Subtitle color='black' >
                    THE CLUB
                </Subtitle>
            </ColorContainer>

            <ColorContainer color='white'>
                <div className='club-content-container' >
                    <div className='club-image-container'>
                        <Link to='/club/fans' >
                            <img src={clubData.clubFan} alt='#' className='club-image' />
                        </Link>
                    </div>
                    <div className='club-image-container'>
                        <Link to='/club/history' >
                            <img src={clubData.clubHistory} alt='#' className='club-image' />
                        </Link>
                    </div>
                    <div className='club-image-container'>
                        <Link to='/club/stadium' >
                            <img src={clubData.clubStadium} alt='#' className='club-image' />
                        </Link>
                    </div>
                </div>
            </ColorContainer>
        </PageContainer>
    )
}

export default Club;