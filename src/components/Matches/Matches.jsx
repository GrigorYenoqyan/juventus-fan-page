import React, { Component } from "react";
import Match from "./Match";
import Title from "../Title";
import ColorContainer from "../ColorContainer";
import PageContainer from '../PageContainer';
import Loading from "../Loading";

import "./Matches.css";


class Matches extends Component {
    constructor(props) {
        super(props);
        this.state = {
            matches: null,
        }
    }

    componentDidMount() {
        this.isFetching = true;
        fetch("http://api.football-data.org/v1/teams/109/fixtures?season=2017", {
            headers: { 'X-Auth-Token': 'e8c0c9dc59d94fb5b417e7527b98074b' },
        })
            .then(response => response.json())
            .then((data) => {
                if (this.isFetching) {
                    this.setState({
                        matches: data.fixtures,
                    })
                }
            })
    }

    componentWillUnmount() {
        this.isFetching = false;
    }



    render() {
        const { matches } = this.state;
        const length = matches ? matches.length : null;
        return (
            <PageContainer>
                <Title color="black">Matches</Title>
                <ColorContainer color='white'>
                    {/* <p className="champion-container">
                        <img src="./images/my7th.jpg" alt="" />
                    </p> */}
                    <ul>
                        {
                            matches ?
                                matches.map((match, i, arr) => <Match match={arr[length - i - 1]} key={match.date} />) :
                                <Loading />
                        }
                    </ul>
                </ColorContainer>
            </PageContainer>
        )
    }
}

export default Matches;