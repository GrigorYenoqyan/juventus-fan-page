import React from "react";
import ContainerWhite from "../Container/ContainerWhite";
import Subtitle from "../Title/Subtitle";
import Trophy from "./Trophy";

import { trophies } from "../../data.js";

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