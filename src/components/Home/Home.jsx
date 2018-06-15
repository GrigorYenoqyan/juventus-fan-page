import React from 'react';
import Thoughts from '../Thoughts';
import TrophySection from '../TrophySection';
import PageContainer from '../PageContainer';
import './Home.css';
import Club from './Club';

const Home = () => {
    return (
        <PageContainer>
            <Thoughts />
            <Club />
            <TrophySection />
        </PageContainer>
    )
}

export default Home;