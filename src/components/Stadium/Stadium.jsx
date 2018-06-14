import React, { Component } from "react";
import ContainerBlack from "../Containers/ContainerBlack";

import { stadiumData as stadium } from "../../data.js";

import "./Stadium.css";



class Stadium extends Component {
    constructor(props) {
        super(props);
        this.state = {
            left: "left",
            center: "center",
            right: "right",
            showIndex: 0,
        }
    }

    slideRight = () => {

        this.setState({
            showIndex: this.state.showIndex < stadium.images.length - 1 ? 
                            this.state.showIndex + 1 : 
                            0,
        })


    }

    slideLeft = () => {
        this.setState({
            showIndex: this.state.showIndex === 0 ? 
                             stadium.images.length - 1: 
                             this.state.showIndex - 1,
        })
        this.setState({
            right: "center",
            center: "left",
        })
    }

    render() {
        const { left, center, right, showIndex } = this.state;
        let rightIndex = showIndex === stadium.images.length - 1 ? 0 : showIndex + 1;
        let leftIndex = showIndex === 0 ? stadium.images.length - 1 : showIndex - 1;
        return (
            <ContainerBlack>
                <div className="slider-container">
                    <div className="left-arrow" onClick={this.slideLeft}>
                        {"<"}
                    </div>

                    <div className="right-arrow" onClick={this.slideRight}>
                        {">"}
                    </div>

                    <div className={left} data-order="1">
                        <img src={stadium.images[leftIndex]} alt="" className="stadium-img" />
                    </div>

                    <div className={center} data-order="2">
                        <img src={stadium.images[showIndex]} alt="" className="stadium-img" />
                    </div>

                    <div className={right} data-order="3">
                        <img src={stadium.images[rightIndex]} alt="" className="stadium-img" />
                    </div>
                </div>
            </ContainerBlack>
        )
    }
}

export default Stadium;