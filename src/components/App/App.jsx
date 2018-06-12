import React, { Component } from 'react';
import News from "../News/News";
import './App.css';

class App extends Component {
    render() {
        return (
        <div className="App">
            <News/>
                {/* <ContainerWhite>
                    <Title color="black">JUVENTUS</Title>
                    <Subtitle color="black">JUVENTUS</Subtitle>
                </ContainerWhite>
                <ContainerBlack>
                    <Title color='white'>JUVENTUS</Title>
                    <Subtitle color="white">JUVENTUS</Subtitle>
                </ContainerBlack>
                <ContainerWhite>
                    <Title color="black">JUVENTUS</Title>
                    <Subtitle color="black">JUVENTUS</Subtitle>
                </ContainerWhite>
            <TrophySection /> */}
        </div>
        );
  }
}

export default App;
