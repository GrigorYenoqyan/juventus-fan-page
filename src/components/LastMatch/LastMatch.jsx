import React, { Component } from "react";
import ColorContainer from "../ColorContainer";
import Subtitle from "../Subtitle";
import { Link } from "react-router-dom";

import "./LastMatch.css";


class LastMatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
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
                    const lastMatch = data.fixtures[data.fixtures.length - 1];
                    this.setState({
                        data: lastMatch,
                    })
                }
            })
    }

    componentWillUnmount() {
        this.isFetching = false;
    }

    returnDate = (date) => {
        return new Date(Date.parse(date));
    }

    getFullDate = (date) => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const day = date.getDate();
        const fullDay = day < 10 ? `0${day}` : day;
        const month = months[date.getMonth()];
        return `${fullDay}.${month}.${date.getFullYear()} `;
    }

    getLogoName = (name) => {
        return name.split(" ").join("-");
    }

    render() {
        const { data } = this.state;
        return (
            <ColorContainer color="white">
                <Subtitle color="black">Last Match</Subtitle>
                {
                    data ?
                        <div className="last-match-container">
                            <p className="last-match-date">
                                Serie A Final Match - {this.getFullDate(this.returnDate(data.date))}
                            </p>
                            <div className="last-match">

                                <span className="home-team-name">{data.homeTeamName}</span>
                                <span className="home-team-logo">
                                    <img
                                        src={`./images/${this.getLogoName(data.homeTeamName)}.svg`}
                                        alt=""
                                    />
                                </span>
                                <span className="last-match-result">
                                    {`${data.result.goalsHomeTeam} : ${data.result.goalsAwayTeam}`}
                                </span>
                                <span className="away-team-logo">
                                    <img
                                        src={`./images/${this.getLogoName(data.awayTeamName)}.svg`}
                                        alt=""
                                    />
                                </span>
                                <span className="away-team-name">{data.awayTeamName}</span>
                            </div>
                            <p className="see-all-matches">
                                <Link to="/matches" className="see-all-matches-link">
                                    See all results
                                </Link>
                            </p>
                        </div> :
                        <p className="last-match-loading">Loading Last Match...</p>
                }
            </ColorContainer>
        )
    }
}

export default LastMatch;
