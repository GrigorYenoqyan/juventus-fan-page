import React from "react";
import ContainerBlack from "../Containers/ContainerBlack";
import Subtitle from "../Titles/Subtitle";

import "./Partners.css";

const PartnersContainer = () => {
    return (
        <ContainerBlack>
            <Subtitle color="white">Partners</Subtitle>
            <div className="partners-container">
                <div className="partner">
                    <a href="https://www.adidas.com" className="adidas" target="_blank">
                        <img src="./images/adidas_grey.svg" alt="" />
                    </a>
                </div>
                <div className="partner">
                    <a href="https://www.jeep.com/" className="jeep" target="_blank">
                        <img src="./images/jeep_grey.svg" alt="" />
                    </a>
                </div>
                <div className="partner">
                    <a href="https://www.cygames.co.jp/en/" className="cygames" target="_blank">
                        <img src="./images/cygames_grey.svg" alt="" />
                    </a>
                </div>
            </div>
        </ContainerBlack>
    )
}

export default PartnersContainer;