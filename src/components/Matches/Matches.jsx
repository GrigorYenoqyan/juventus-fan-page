import React from "react";
import Match from "./Match";
import Title from "../Titles/Title";
import ContainerWhite from "../Containers/ContainerWhite/index.js";

import "./Matches.css";

import { matchesData } from "../../data.js";

const Matches = () => {
    const { fixtures: matches } = matchesData;
    return (
        <div>
            <Title color="black">Matches</Title>
            <ContainerWhite>
                <ul>
                    {
                        matches.map((match) => <Match match={match} key={match.date} />)
                    }
                </ul>
            </ContainerWhite>
        </div>
    )
}

export default Matches;