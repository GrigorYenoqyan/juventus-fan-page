import React from "react";
import ColorContainer from "../ColorContainer";
import Subtitle from "../Subtitle";
import Trophy from "./Trophy";

import { trophies } from "../../data.js";

import "./TrophySection.css";

const TrophySection = () => {
    return (
        <div>
            <ColorContainer color='white'>
                <Subtitle color="black">Trophies</Subtitle>
                <div className="trophies-container">
                    {
                        trophies.map((trophy) => <Trophy data={trophy} key={trophy.name} />)
                    }
                </div>
            </ColorContainer>
        </div>
    );
}

export default TrophySection;