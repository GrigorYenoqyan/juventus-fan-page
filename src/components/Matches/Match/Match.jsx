import React, { Component } from "react";

import "./Match.css";


class Match extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentMonth: 0,
        }
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

    getFullTime = (date) => {
        const hours = date.getHours();
        const fullHours = hours < 10 ? `0${hours}` : hours;
        const minutes = date.getMinutes();
        const fullMinutes = minutes < 10 ? `0${minutes}` : minutes;
        return `${fullHours}:${fullMinutes}`;
    }
    // getLogo = (url) => {
    //     fetch(url, {mode: "no-cors"})
    //         .then((response) => response.json())
    //         .then(data => {
    //             console.log(data);
    //         })
    // }

    render() {
        const { match } = this.props;
        const fullDate = this.returnDate(match.date);
        // const { currentMonth } = this.state;
        // let newMonth = fullDate.getMonth();
        // if (newMonth > currentMonth) {
        //     console.log("changed");
        //     console.log(newMonth);
        //     console.log(currentMonth);
        //     this.setState({
        //         currentMonth: newMonth,
        //     })
        // }
        return (
            <div>
                {
                    <div className="sepatator"></div>
                }
                <li className="match">
                    <span className="date">{this.getFullDate(fullDate)}</span>
                    <span className="time">{this.getFullTime(fullDate)}</span>
                    <span className="home-team">{match.homeTeamName}</span>
                    <span className="result">
                        {`${match.result.goalsHomeTeam} - ${match.result.goalsAwayTeam}`}
                    </span>
                    <span className="away-team">{match.awayTeamName}</span>
                </li>
            </div>
        )
    }
}

export default Match;