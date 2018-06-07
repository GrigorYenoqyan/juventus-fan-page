import React from "react";
import ContainerWhite from "../Containers/ContainerWhite";
import Subtitle from "../Titles/Subtitle";
import Trophy from "./Trophy";

import { trophies } from "../../data.js";

import "./TrophySection.css";

const TrophySection = () => {
    return (
        <div>
            <ContainerWhite>
                <Subtitle color="black">Trophies</Subtitle>
                <div className="trophies-container">
                    {
                        trophies.map((trophy) => <Trophy data={trophy} key={trophy.name} />)
                    }
                </div>
            </ContainerWhite>
        </div>
    );
}

export default TrophySection;