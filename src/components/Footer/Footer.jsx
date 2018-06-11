import React from "react";
import Social from "./Social/Social";
import ContainerBlack from "../Containers/ContainerBlack";
import Subtitle from "../Titles/Subtitle";
import Title from "../Titles/Title";


import "./Footer.css";

const Footer = () => {
    return (
        <div>
            <ContainerBlack>
                <Subtitle color="white">Social pages of the best club</Subtitle>
                <Social />
                <Title color="white">#FINOALLAFINE</Title>
                <div className="foot-part">
                    <ul>
                        <li><a href="">Terms and Conditions</a></li>
                        <li><a href="">Privacy</a></li>
                        <li><a href="">Cookie Policy</a></li>
                        <li><a href="">Contact Us</a></li>
                    </ul>
                    <span className="copyright">© 2018 Juventus Football Club S.p.A.</span>
                </div>
            </ContainerBlack>
        </div>
    )
}

export default Footer;