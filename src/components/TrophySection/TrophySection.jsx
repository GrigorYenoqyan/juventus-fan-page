import React from "react";
import { trophies } from "../../data.js";
import ContainerWhite from "../Container/ContainerWhite/index.js";
import Subtitle from "../Titles/Subtitle";
import Trophy from "./Trophy/index.js";

const TrophySection = () => {
    return (
        <div>
            <ContainerWhite>
                <Subtitle color="black">Trophies</Subtitle>
                {
                    trophies.map((trophy) => <Trophy data={trophy} key={trophy.name} />)
                }
            </ContainerWhite>
        </div>
    );
}

export default TrophySection;