import React from 'react';
import Thoughts from '../Thoughts';
import TrophySection from '../TrophySection';
import PageContainer from '../PageContainer';
import './Home.css';
import LastMatch from '../LastMatch';

const Home = () => {
    return (
        <PageContainer>
            <Thoughts />
            <Club />
            <TrophySection />
            <LastMatch />
        </PageContainer>
    )
}

export default Home;