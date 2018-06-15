import React from 'react';
import './Club.css';
import { clubData } from '../../../data';
import { Link } from 'react-router-dom';
import ColorContainer from '../../ColorContainer';
import Subtitle from '../../Subtitle';

const Club = () => {
    return (
        <div>
            <ColorContainer color='white'>
                <Subtitle color='black' >
                    THE CLUB
                </Subtitle>
            </ColorContainer>
            <div>
                <div className='club-content-container' >
                    <div className='club-image-container'>
                        <Link to='/fans' >
                            <img src={clubData.clubFan} alt='' className='club-image' />
                            <div className='black-club-block'>
                                <p className='black-club-block-text'>FANS</p>
                            </div>
                        </Link>
                    </div>
                    <div className='club-image-container'>
                        <Link to='/history' >
                            <img src={clubData.clubHistory} alt='' className='club-image' />
                            <div className='black-club-block'>
                                <p className='black-club-block-text'>HISTORY</p>
                            </div>
                        </Link>
                    </div>
                    <div className='club-image-container'>
                        <Link to='/stadium' >
                            <img src={clubData.clubStadium} alt='' className='club-image' />
                            <div className='black-club-block'>
                                <p className='black-club-block-text'>STADIUM</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Club;