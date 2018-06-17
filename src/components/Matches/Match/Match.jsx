import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Match.css";


class Match extends Component {

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

    getFullTime = (date) => {
        const hours = date.getHours();
        const fullHours = hours < 10 ? `0${hours}` : hours;
        const minutes = date.getMinutes();
        const fullMinutes = minutes < 10 ? `0${minutes}` : minutes;
        return `${fullHours}:${fullMinutes}`;
    }
    getLogoName = (name) => {
        return name.split(" ").join("-");
    }


    render() {
        const { match } = this.props;
        const fullDate = this.returnDate(match.date);
        return (
            <div>
                <li className="match">
                    <span className="match-span date">{this.getFullDate(fullDate)}</span>
                    <span className="match-span time">{this.getFullTime(fullDate)}</span>
                    <span className="match-span home-team">{match.homeTeamName}</span>
                    <span className="match-span home-logo">
                        <img
                            src={`./images/${this.getLogoName(match.homeTeamName)}.svg`}
                            alt=""
                        />
                    </span>
                    <span className="match-span result">
                        {`${match.result.goalsHomeTeam} - ${match.result.goalsAwayTeam}`}
                    </span>
                    <span className="match-span away-logo">
                        <img
                            src={`./images/${this.getLogoName(match.awayTeamName)}.svg`}
                            alt=""
                        />
                    </span>
                    <span className="match-span away-team">{match.awayTeamName}</span>
                </li>
            </div>
        )
    }
}

Match.propTypes = {
    match: PropTypes.object.isRequired,
}


export default Match;
