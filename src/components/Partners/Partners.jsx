import React from "react";
import ColorContainer from "../ColorContainer";
import Subtitle from "../Subtitle";

import adidas from "../../assets/images/adidas_grey.svg";
import jeep from "../../assets/images/jeep_grey.svg";
import cygames from "../../assets/images/cygames_grey.svg";

import "./Partners.css";

const PartnersContainer = () => {
    return (
        <ColorContainer color="black">
            <Subtitle color="white">Partners</Subtitle>
            <div className="partners-container">
                <div className="partner">
                    <a href="https://www.adidas.com" className="adidas" rel="noopener noreferrer" target="_blank">
                        <img src={adidas} alt="" />
                    </a>
                </div>
                <div className="partner">
                    <a href="https://www.jeep.com/" className="jeep" rel="noopener noreferrer" target="_blank">
                        <img src={jeep} alt="" />
                    </a>
                </div>
                <div className="partner">
                    <a href="https://www.cygames.co.jp/en/" className="cygames" rel="noopener noreferrer" target="_blank">
                        <img src={cygames} alt="" />
                    </a>
                </div>
            </div>
        </ColorContainer>
    )
}

export default PartnersContainer;