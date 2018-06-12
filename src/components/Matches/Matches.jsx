import React from "react";
import Match from "./Match";
import Title from "../Title";
import ColorContainer from "../ColorContainer";
import PageContainer from '../PageContainer';

import "./Matches.css";

import { matchesData } from "../../data.js";

const Matches = () => {
    const { fixtures: matches } = matchesData;
    return (
        <PageContainer>
            <Title color="black">Matches</Title>
            <ColorContainer color='white'>
                <ul>
                    {
                        matches.map((match) => <Match match={match} key={match.date} />)
                    }
                </ul>
            </ColorContainer>
        </PageContainer>
    )
}

export default Matches;