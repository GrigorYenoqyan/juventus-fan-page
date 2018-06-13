import React from 'react';
import Thoughts from '../Thoughts';
import TrophySection from '../TrophySection';
import PageContainer from '../PageContainer';
import './Home.css';

const Home = () => {
    return (
        <PageContainer>
            <Thoughts />
            <TrophySection />
        </PageContainer>
    )
}

export default Home;