import React, { Component } from "react";
import ColorContainer from "../ColorContainer";
import Title from "../Title";
import PageContainer from "../PageContainer";
import Player from "./Player";
import Loading from "../Loading";

import { teamPositions as positions } from "../../data.js";


import "./Team.css";


class Team extends Component {
    constructor(props) {
        super(props);
        this.state = {
            team: null,
            selectedIndex: 0,
        }
    }

    setPosition = (index) => {
        console.log(index)
        this.setState({
            selectedIndex: index,
        })
    }
    

    componentDidMount() {
        fetch("https://5b2123f8ca762000147b26e0.mockapi.io/team")
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    team: data.players,
                })
            })
    }

    render() {
        console.log(positions[this.state.selectedIndex],positions);
        const { team, selectedIndex } = this.state;
        const part = team ? team.filter(player => player.position === positions[selectedIndex]) : null;
        return (
            <PageContainer>
                <ColorContainer color="white">
                    <Title color="black">Players</Title>
                    <ul className="players-switcher">
                        {
                            positions.map((elem, i) => (
                                    <li 
                                        onClick={() => this.setPosition(i)}
                                        key={elem}
                                        className={i === selectedIndex ? "position active-position" : "position"}
                                    >
                                        {(elem+"s").toUpperCase()}
                                    </li>
                                )
                            )
                        }
                    </ul>
                    <div className="team-container">
                        {
                            
                            team ?
                                part.map((player) => <Player player={player} key={player.name} />) :
                                <Loading />
                        }
                    </div>
                </ColorContainer>
            </PageContainer>
        )
    }
}

export default Team;