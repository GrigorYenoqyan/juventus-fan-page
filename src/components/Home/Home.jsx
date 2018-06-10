import React from 'react';
import Thoughts from '../Thoughts';
import TrophySection from '../TrophySection';
import MainContainer from '../Containers/MainContainer';
import './Home.css';

const Home = () => {
    return (
        <MainContainer>
            <Thoughts />
            <TrophySection />
        </MainContainer>
    )
}

export default Home;