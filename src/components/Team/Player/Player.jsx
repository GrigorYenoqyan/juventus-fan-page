import React from "react";

import "./Player.css";


const Player = ({ player }) => (
    <div className="player-container">
        <div className="player-image">
            <img src={`${player.image}${player.name}.png`} alt=""/>
        </div>
        <div className="player-name">
            <p>{player.name}</p>
        </div>
        <div className="player-number">
            {player.jerseyNumber}
        </div>
    </div>
)

export default Player;