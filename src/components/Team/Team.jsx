import React, { Component } from "react";
import ColorContainer from "../ColorContainer";
import Title from "../Title";
import PageContainer from "../PageContainer";
import Player from "./Player";
import Loading from "../Loading";

import "./Team.css";


class Team extends Component {
    constructor(props) {
        super(props);
        this.state = {
            team: null,
            position: "keeper",
        }
    }

    setPosition = (event) => {
        this.setState({
            position: event.target.dataset.position,
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
        const { team, position } = this.state;
        const part =  team ? team.filter(player => player.position === position) : null;
        return (
            <PageContainer>
                <ColorContainer color="white">
                    <Title color="black">Players</Title>
                    <ul className="players-switcher">
                        <li onClick={this.setPosition} data-position="keeper">GOALKEEPERS</li>
                        <li onClick={this.setPosition} data-position="defender">DEFENDERS</li>
                        <li onClick={this.setPosition} data-position="midfielder">MIDFIELDERS</li>
                        <li onClick={this.setPosition} data-position="forward">FORWARDS</li>
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